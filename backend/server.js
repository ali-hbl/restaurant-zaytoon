const PORT = 9999;
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(express.json());
app.use(express.static('images'));
app.use(bodyParser.json({ limit: '50mb', type: 'application/json' }));

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
app.use('/orders', ordersRoutes);
app.use('/profile', profileRoute);

// start listening the server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});
