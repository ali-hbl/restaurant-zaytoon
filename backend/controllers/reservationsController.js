const connection = require('../db');
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('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');

// GET orders
const getReservations = (req, res) => {
  connection.query('SELECT * FROM reservations', function (err, results) {
    if (err) return res.json({ success: false, message: err });

    res.json({ results });
  });
};

// POST
const postReservation = (req, res) => {
  const data = req.body;
  const selectedTime = new Date(data.selectedTime);
  const time = `${selectedTime.toISOString().split('T')[0]} ${selectedTime.toTimeString().split(' ')[0]}`;

  const to = data.email;
  const from = 'restozaytoon@gmail.com';
  const subject = 'Votre réservation est en confirmée!';

  connection.query(
    'INSERT INTO `reservations` (`user_id`, `name`, `email`, `phone`, `time`, `num_guests`) VALUES (?, ?, ?, ?, ?, ?)',
    [data.uid, data.name, data.email, data.phone, time, data.numGuests],

    function (err, results) {
      if (err) return res.json({ success: false, message: err });

      res.json({ results });
    }
  );

  // Send email with Sendgrid
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

      console.log(res, 'Email was sent!');
    });
  };

  const templateId = 'd-7c4644d6cf5f41d7839998b23bd17556';
  const dynamicData = {
    name: data.name,
    email: data.email,
    phone: data.phone,
    numGuests: data.numGuests,
    time: time,
  };
  sendEmail(to, from, subject, templateId, dynamicData);
};

// UPDATE
const updateReservationStatus = (req, res) => {
  const id = req.params.id;
  const data = req.body;

  connection.query(
    'UPDATE `reservations` SET status = ? WHERE id = ?',
    [data.updatedStatus, id],
    function (err, result) {
      if (err) return res.json({ success: false, message: err });

      res.json({ result });
    }
  );
};

// DELETE
const deleteReservation = (req, res) => {
  const id = req.params.id;

  connection.query('DELETE FROM `reservations` WHERE id = ?', [id], function (err, result) {
    if (err) return res.json({ success: false, message: err });

    res.json({ result });
  });
};

module.exports = { getReservations, postReservation, updateReservationStatus, deleteReservation };
