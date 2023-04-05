const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 9999;

const usersRoute = require('./routes/usersRoute');
const catalogueRoute = require('./routes/catalogueRoute');
const reservationRoutes = require('./routes/reservationsRoute');
// const ordersRoutes = require('./routes/orders'); TODO

app.use(express.json());
app.use(cors());
app.use(express.static('images'));

app.use('/users', usersRoute);
app.use('/catalogue', catalogueRoute);
app.use('/reservations', reservationRoutes); // TODO meme chose
// app.use('/orders', ordersRoutes); // TODO verifier les routes (update 'product_name', etc...), les tester dans l'extension

// start listening the server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
