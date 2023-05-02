const PORT = 9999;
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.static('images'));
app.use(express.json());

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
