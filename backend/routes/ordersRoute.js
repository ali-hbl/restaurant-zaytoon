// const express = require('express');
// const router = express.Router();
// const connection = require('../db');

// // format Date for createAd field
// // const date = new Date();
// // const createdAt = `${date.toISOString().split('T')[0]} ${date.toTimeString().split(' ')[0]}`; // convert Date

// // GET
// router.get('/orders/:id', (req, res) => {
//   connection.query('SELECT * FROM `orders` WHERE `id` = ?', [req.params.id], (err, results) => {
//     if (err) return res.json({ success: false, message: err });

//     res.json({ results });
//   });
// });

// // POST
// // router.post('/orders', (req, res) => {
// //   const data = req.body;

// //   connection.query(
// //     'INSERT INTO `orders` (`name`, `status`, `created_at`) VALUES (?, ?, ?)',
// //     [data.name, data.status, createdAt],

// //     (err, results) => {
// //       if (err) return res.json({ success: false, message: err });

// //       res.json({ success: true, data: results.insertId });
// //     }
// //   );
// // });

// // UPDATE
// // router.put('/orders/:id', (req, res) => {
// //   const orderId = req.params.id;
// //   const data = req.body;

// //   connection.query('UPDATE `orders` SET status = ? WHERE id = ?', [data, orderId], (err, results) => {
// //     if (err) return res.json({ success: false, message: err });

// //     res.json({ results });
// //   });
// // });

// // DELETE
// // router.delete('/orders/:id', (req, res) => {
// //   const orderId = req.params.id;

// //   connection.query('DELETE FROM `orders` WHERE id = ?', orderId, (err, results) => {
// //     if (err) return res.json({ success: false, message: err });

// //     res.json({ results });
// //   });
// // });

// module.exports = router;
