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

// INSERT
const postDish = (req, res) => {
  const { stripeID, name, description, price, image, category } = req.body;

  connection.query(
    'INSERT INTO `catalogue`(`id`, `name`, `description`, `price`, `image_url`, `category`) VALUES (?, ?, ?, ?, ?, ?)',
    [stripeID, name, description, price, image, category],

    function (err, result) {
      if (err) return res.json({ success: false, message: err });

      res.json({ result });
    }
  );
};

// UPLOAD
const updateDish = (req, res) => {
  const { productId, name, description, price, image, category } = req.body;

  connection.query(
    'UPDATE `catalogue` SET `name` = ?, `description` = ?, `price` = ?, `image_url` = ?, `category` = ? WHERE `id` = ?',
    [name, description, price, image, category, productId],

    function (err, result) {
      if (err) return res.json({ success: false, message: err });

      res.json({ result });
    }
  );
};

// DELETE
const deleteDish = (req, res) => {
  const id = req.params.id;

  connection.query('DELETE FROM `catalogue` WHERE id = ?', [id], function (err, result) {
    if (err) return res.json({ success: false, message: err });

    res.json({ result });
  });
};

module.exports = { getAll, getTopThree, getById, postDish, updateDish, deleteDish };
