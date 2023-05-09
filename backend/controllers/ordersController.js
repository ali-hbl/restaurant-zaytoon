const connection = require('../db');
const stripe = require('stripe')(
  'sk_test_51MyXBjLEZw1RbHzdnrTe44O4qYCRXW8rFW88qNXLO9AwUsMa0onRSQRLX9qIIBlziQchFSHWvGHcX8Qqx3oeaIGx00vACpmjTA'
);

// POST order to Stripe and database
const postOrder = async (req, res) => {
  const { uid } = req.body;
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
    }

    // send response
    res.send(JSON.stringify({ url: session.url }));
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Error while saving order' });
  }
};

module.exports = { postOrder };
