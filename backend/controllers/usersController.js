const connection = require('../db');

// GET All
const getAll = (req, res) => {
  connection.query('SELECT * FROM `users`', function (err, results) {
    if (err) return res.json({ success: false, message: err });

    res.json({ results });
  });
};

// GET by ID
const getUserById = (req, res) => {
  const id = req.params.id;

  connection.query('SELECT username FROM `users` WHERE `id` = ?', [id], function (err, results) {
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

// UPDATE
const updateUser = (req, res) => {
  const data = req.body;
  const userId = req.params.id;

  connection.query(
    'UPDATE `users` SET `username` = ?, `password` = ?, `email` = ?, `created_at` = ? WHERE `id` = ?',
    [data.username, data.password, data.email, createdAt, userId],

    function (err, results) {
      if (err) return res.json({ success: false, message: err });

      res.json({ results });
    }
  );
};

// DELETE
const deleteUser = (req, res) => {
  const userId = req.params.id;

  connection.query(
    'DELETE FROM `users` WHERE `id` = ?',
    [userId],

    function (err, results) {
      if (err) return res.json({ success: false, message: err });

      res.json({ results });
    }
  );
};

module.exports = { getAll, getUserById, postUser, updateUser, deleteUser };
