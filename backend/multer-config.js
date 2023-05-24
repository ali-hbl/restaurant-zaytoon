const multer = require('multer');
const sanitize = require('sanitize-filename');

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './images');
  },
  filename: function (req, file, callback) {
    const sanitizedFileName = sanitize(file.originalname);
    callback(null, sanitizedFileName);
  },
});

// FIXME: fait crasher le serveur lors du'upload d'un mauvais format
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024, // limit to 1MB
  },
  fileFilter: function (req, file, cb) {
    const allowedMimes = ['image/jpeg', 'image/jpg', 'image/png'];

    if (allowedMimes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      alert('Invalid file type. Only JPEG, JPG and PNG files are allowed.');
    }
  },
});

/////////////// simple but working :
// const upload = multer({ storage: storage });

module.exports = upload;
