const PORT = 9999;
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(express.static('images'));
app.use(bodyParser.json({ limit: '100mb', type: 'application/json' }));

///////////////////////////// TEST
// File upload configuration
// const fileUpload = require('express-fileupload');

// app.use(
//   fileUpload({
//     limits: {
//       fileSize: 5000000, // Around 5MB
//     },
//     abortOnLimit: true,
//   })
// );

// app.post('/upload', (req, res) => {
//   console.log('req.files ===>', req.files);

//   const { image } = req.files;
//   if (!image) return res.sendStatus(400);

//   // Move the uploaded image to our upload folder
//   image.mv(__dirname + '/images/' + image.name);

//   res.sendStatus(200);
// });

// app.post('/catalogue/insert-dish', (req, res) => {
//   console.log('req.files ===>', req.files);

//   const { image } = req.files;
//   if (!image || !image.tempFilePath) return res.status(400).send('No file uploaded');

//   // Move the temporary file to the desired location
//   const targetPath = __dirname + '/images/' + image.name;

//   fs.rename(image.tempFilePath, targetPath, (err) => {
//     if (err) {
//       console.error('Error moving file:', err);
//       return res.status(500).send('Error moving file');
//     }

//     res.sendStatus(200);
//   });
// });

///////////////////////////// END TEST

const usersRoute = require('./routes/usersRoute');
const catalogueRoute = require('./routes/catalogueRoute');
const reservationRoute = require('./routes/reservationsRoute');
const ordersRoutes = require('./routes/ordersRoute');
const messagesRoute = require('./routes/messagesRoute');
const profileRoute = require('./routes/profileRoutes');

app.use('/users', usersRoute);
app.use('/catalogue', catalogueRoute);
app.use('/reservations', reservationRoute);
app.use('/messages', messagesRoute);
app.use('/checkout', ordersRoutes);
app.use('/profile', profileRoute);

// start listening the server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
