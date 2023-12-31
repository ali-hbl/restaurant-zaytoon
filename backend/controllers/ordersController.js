require('dotenv').config(); // Load environment variables from .env file
const connection = require('../db');
const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY);
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENGRID_PRIVATE_KEY);

// GET orders grouped by created_at field
const getOrders = (req, res) => {
  connection.query(
    "SELECT orders.created_at, JSON_OBJECT( 'email', users.email, 'firstname', users.username, 'dishes', JSON_ARRAYAGG( JSON_OBJECT( 'id', orders.id, 'title', orders.product_name, 'price', orders.price, 'quantity', orders.quantity ) ) ) AS order_details FROM orders, users WHERE orders.user_id = users.uid GROUP BY orders.created_at, users.email, users.username",
    function (err, results) {
      if (err) return res.json({ success: false, message: err });

      res.json({ results });
    }
  );
};

// POST order to Stripe and database + send Email
const postOrder = async (req, res) => {
  const { uid } = req.body;

  // Sendgrid variables
  const to = req.body.email;
  const from = 'restozaytoon@gmail.com';
  const subject = 'Votre commande est en cours de livraison.';
  let totalPrice = 0;
  let itemsList = ''; // Create a variable to store the items list string

  // Strip variables
  const items = req.body.items;
  let lineItems = [];

  // convert datas to Stripe acceptations
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  try {
    // create Stripe session
    const session = await stripe.checkout.sessions.create({
      line_items: lineItems,
      mode: 'payment',
      success_url: 'http://localhost:3000/success',
      cancel_url: 'http://localhost:3000/cancel',
    });

    // loop over each item to store into the database
    for (const { id, name, quantity, price } of items) {
      const formattedPrice = price.toString().replace(',', '.'); // replace comma to point to avoid rounding prices in database

      connection.query(
        'INSERT INTO `orders` (`user_id`, `product_id`, `product_name`, `quantity`, `price`) VALUES (?, ?, ?, ?, ?)',
        [uid, id, name, quantity, formattedPrice]
      );

      // Add the item to the items list string
      itemsList += `<ul>
        <li>${name} (${quantity}x)</li>
        <li>Prix: ${formattedPrice}€</li>
      </ul>`;

      // Calculate total price
      totalPrice += parseFloat(formattedPrice);
    }

    // SEND EMAIL WITH SENDGRID
    const dynamicData = {
      itemsList: itemsList,
      totalPrice: totalPrice.toFixed(2),
    };

    const sendEmail = (to, from, subject, templateId, dynamicData) => {
      const msg = {
        to,
        from,
        subject,
        templateId,
        dynamic_template_data: dynamicData,
      };

      sgMail.send(msg, function (err, res) {
        if (err) return res.json({ success: false, message: err });
      });
    };

    const templateId = 'd-9ecb76e1cc784b96bba86a52d7c466fb';

    // Send response and email
    res.send(JSON.stringify({ url: session.url }));
    sendEmail(to, from, subject, templateId, dynamicData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error while saving order' });
  }
};

// DELETE
const deleteOrder = (req, res) => {
  const timestamp = req.params.id;
  const updatedTimestamp = new Date(timestamp); // Convert the timestamp to a JavaScript Date object
  updatedTimestamp.setHours(updatedTimestamp.getHours() + 2); // Add 2 hours to the date because database is setted with 2h more
  const formattedTimestamp = updatedTimestamp.toISOString();

  connection.query(
    "DELETE FROM `orders` WHERE created_at = STR_TO_DATE(?, '%Y-%m-%dT%H:%i:%s.000Z')",
    [formattedTimestamp],
    function (err, result) {
      if (err) return res.json({ success: false, message: err });

      res.json({ result });
    }
  );
};

module.exports = { getOrders, postOrder, deleteOrder };
