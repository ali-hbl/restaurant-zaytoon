const connection = require('../db');

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
  // console.log(req);

  connection.query(
    // 'INSERT INTO `users`(`id`, `username`, `password`, `email`, `phone`, `created_at`) VALUES (?, ?, ?, ?, ?, ?)',
    'INSERT INTO `users`(`id`, `username`, `password`, `email`, `phone`, `created_at`) VALUES (?, ?, ?, ?, ?)',
    [req.user.uid, data.username, data.password, data.email, data.phone],
    // [req.user.uid, data.username, data.password, data.email, data.phone, createdAt],

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

module.exports = { getUserById, postUser, updateUser, deleteUser };
