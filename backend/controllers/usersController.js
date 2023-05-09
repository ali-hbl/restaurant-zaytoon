const connection = require('../db');

// GET by ID
const getUserById = (req, res) => {
  const id = req.params.id;

  connection.query('SELECT * FROM `users` WHERE `uid` = ?', [id], function (err, results) {
    if (err) return res.json({ success: false, message: err });

    res.json({ results });
  });
};

// POST
const postUser = (req, res) => {
  const data = req.body;

  connection.query(
    'INSERT INTO `users` (`uid`, `username`, `email`) VALUES (?, ?, ?)',
    [data.uid, data.username, data.email],

    function (err, results) {
      if (err) return res.json({ success: false, message: err });

      res.json({ results });
    }
  );
};

module.exports = { getUserById, postUser };
