const connection = require('../db');

// GET
const getMessages = (req, res) => {
  connection.query('SELECT * FROM `messages`', function (err, results) {
    if (err) return res.json({ success: false, message: err });

    res.json({ results });
  });
};

// POST
const postMessage = (req, res) => {
  const data = req.body;

  connection.query(
    'INSERT INTO `messages` (`user_id`, `name`, `email`, `phone`, `message`) VALUES (?, ?, ?, ?, ?)',
    [data.uid, data.name, data.email, data.phone, data.message],

    function (err, results) {
      if (err) return res.json({ success: false, message: err });

      res.json({ results });
    }
  );
};

// DELETE
const deleteMessage = (req, res) => {
  const id = req.params.id;

  connection.query('DELETE FROM `messages` WHERE id = ?', [id], function (err, result) {
    if (err) return res.json({ success: false, message: err });

    res.json({ result });
  });
};

module.exports = { getMessages, postMessage, deleteMessage };
