const connection = require('../db');

// GET my reservations
const getReservations = (req, res) => {
  const uid = req.params.id;

  connection.query(
    'SELECT * FROM `reservations`, `users` WHERE reservations.user_id = users.uid AND users.uid = ?',
    [uid],

    function (err, results) {
      if (err) return res.json({ success: false, message: err });

      res.json({ results });
    }
  );
};

// GET my orders
const getOrders = (req, res) => {
  const uid = req.params.id;

  connection.query(
    'SELECT * FROM `orders`, `users` WHERE orders.user_id = users.uid AND users.uid = ?',
    [uid],

    function (err, results) {
      if (err) return res.json({ success: false, message: err });

      res.json({ results });
    }
  );
};

module.exports = { getReservations, getOrders };
