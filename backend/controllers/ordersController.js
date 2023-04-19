const stripe = require('stripe')(
  'sk_test_51MyXBjLEZw1RbHzdnrTe44O4qYCRXW8rFW88qNXLO9AwUsMa0onRSQRLX9qIIBlziQchFSHWvGHcX8Qqx3oeaIGx00vACpmjTA'
);

// POST order to Stripe
const postOrder = async (req, res) => {
  const items = req.body.items;
  let lineItems = [];

  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/cancel',
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );

};

module.exports = { postOrder };
