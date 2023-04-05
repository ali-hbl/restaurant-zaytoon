const connection = require('../db');

// POST
const postReservation = (req, res) => {
  const data = req.body;
  const selectedTime = new Date(data.selectedTime);
  const time = `${selectedTime.toISOString().split('T')[0]} ${selectedTime.toTimeString().split(' ')[0]}`;

  connection.query(
    'INSERT INTO `reservations` (`user_id`, `name`, `email`, `phone`, `time`, `num_guests`) VALUES (?, ?, ?, ?, ?, ?)',
    [data.uid, data.name, data.email, data.phone, time, data.numGuests],

    function (err, results) {
      if (err) return res.json({ success: false, message: err });

      res.json({ results });
    }
  );
};

module.exports = { postReservation };
