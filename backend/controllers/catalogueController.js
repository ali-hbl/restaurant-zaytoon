const connection = require('../db');

// GET All
const getAll = (req, res) => {
  connection.query('SELECT * FROM `catalogue`', function (err, results) {
    if (err) return res.json({ success: false, message: err });

    res.json({ results });
  });
};

// GET 3 plates
const getTopThree = (req, res) => {
  connection.query('SELECT * FROM `catalogue` LIMIT 3', function (err, results) {
    if (err) return res.json({ success: false, message: err });

    res.json({ results });
  });
};

// GET by ID
const getById = (req, res) => {
  const id = req.params.id;

  connection.query('SELECT * FROM `catalogue` WHERE id = ?', [id], function (err, result) {
    if (err) return res.json({ success: false, message: err });

    res.json({ result });
  });
};

module.exports = { getAll, getTopThree, getById };
