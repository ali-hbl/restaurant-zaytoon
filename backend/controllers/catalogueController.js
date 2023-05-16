const connection = require('../db');
const multer = require('multer');
const path = require('path');

// setting storage engine
const storageEngine = multer.diskStorage({
  destination: '../../backend/images/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}--${file.originalname}`);
  },
});

const checkFileType = function (file, cb) {
  // allowed file extensions
  const fileTypes = /jpeg|jpg|png|gif|svg/;
  const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimeType = fileTypes.test(file.mimetype);

  if (mimeType && extName) {
    return cb(null, true);
  } else {
    cb('Error: You can only upload images!');
  }
};

// initializing multer
const upload = multer({
  storage: storageEngine,
  limits: { fileSize: 10000000 },
  fileFilter: (req, file, cb) => {
    checkFileType(file, cb);
  },
});

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
  const data = req.body;

  upload.single('image_url')(req, res, function (err) {
    console.log(req.body.fileName);

    if (err) {
      console.error(err);
      return res.json({ success: false, message: 'File upload failed' });
    }

    connection.query(
      'INSERT INTO `catalogue`(`name`, `description`, `price`, `image_url`, `category`) VALUES (?, ?, ?, ?, ?)',
      [data.name, data.description, data.price, data.fileName, data.category],

      function (err, result) {
        if (err) return res.json({ success: false, message: err });

        res.json({ result });
      }
    );
  });
};

// DELETE
const deleteDish = (req, res) => {
  const id = req.params.id;

  connection.query('DELETE FROM `catalogue` WHERE id = ?', [id], function (err, result) {
    if (err) return res.json({ success: false, message: err });

    res.json({ result });
  });
};

module.exports = { getAll, getTopThree, getById, postDish, deleteDish };
