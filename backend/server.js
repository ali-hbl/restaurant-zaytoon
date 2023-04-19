const PORT = 9999;
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('images'));
app.use(express.json());

const usersRoute = require('./routes/usersRoute');
const catalogueRoute = require('./routes/catalogueRoute');
const reservationRoutes = require('./routes/reservationsRoute');
const ordersRoutes = require('./routes/ordersRoutes');
const messagesRoute = require('./routes/messagesRoute');

app.use('/users', usersRoute);
app.use('/catalogue', catalogueRoute);
app.use('/reservations', reservationRoutes);
app.use('/messages', messagesRoute);
app.use('/checkout', ordersRoutes);

// start listening the server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
