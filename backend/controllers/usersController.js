const connection = require('../db');

// GET
const getUsers = (req, res) => {
  connection.query('SELECT * FROM `users`', function (err, results) {
    if (err) return res.json({ success: false, message: err });

    res.json({ results });
  });
};

// GET by ID
const getUserById = (req, res) => {
  const id = req.params.id;

  connection.query('SELECT * FROM `users` WHERE `uid` = ?', [id], function (err, results) {
    if (err) return res.json({ success: false, message: err });

    res.json({ results });
  });
};

// GET role
const getUserRole = (req, res) => {
  const id = req.params.id;

  connection.query('SELECT `role` FROM `users` WHERE users.uid = ?', [id], function (err, results) {
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

// DELETE
const deleteUser = (req, res) => {
  const id = req.params.id;

  connection.query('DELETE FROM `users` WHERE id = ?', [id], function (err, result) {
    if (err) return res.json({ success: false, message: err });

    res.json({ result });
  });
};

module.exports = { getUsers, getUserById, getUserRole, postUser, deleteUser };
