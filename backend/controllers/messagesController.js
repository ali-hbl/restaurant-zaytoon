const connection = require('../db');

// POST
const postMessage = (req, res) => {
  const data = req.body;
  console.log(data);

  connection.query(
    'INSERT INTO `messages` (`user_id`, `name`, `email`, `phone`, `message`) VALUES (?, ?, ?, ?, ?)',
    [data.uid, data.name, data.email, data.phone, data.message],

    function (err, results) {
      console.log(err);
      console.log(results);

      if (err) return res.json({ success: false, message: err });

      res.json({ results });
    }
  );
};

module.exports = { postMessage };
