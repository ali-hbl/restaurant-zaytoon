const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 9999;
// const admin = require('firebase-admin');
// const serviceAccount = require('./config:restaurant-zaytoon-firebase-adminsdk-gb54k-7c3f431fff.json');

const usersRoute = require('./routes/usersRoute');
const catalogueRoute = require('./routes/catalogueRoute');
// const ordersRoutes = require('./routes/orders'); TODO
// const reservationRoutes = require('./routes/reservations'); TODO

app.use(express.json());
app.use(cors());
app.use(express.static('images'));

app.use('/users', usersRoute);
app.use('/catalogue', catalogueRoute);
// app.use('/orders', ordersRoutes); // TODO verifier les routes (update 'product_name', etc...), les tester dans l'extension
// app.use('/reservations', reservationRoutes); // TODO meme chose

// Firebase initializaition
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
// });

// const checkAuth = (req, res, next) => {
//   if (!req.headers.authorization) {
//     return res.status(403).send('Unauthorized');
//   }

//   admin
//     .auth()
//     .verifyIdToken(req.headers.authorization)
//     .then(() => next())
//     .catch(() => res.status(403).send('Unauthorized'));
// };

// start listening the server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
