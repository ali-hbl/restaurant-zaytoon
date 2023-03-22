const mysql = require('mysql2');

// Connection to DB
const connection = mysql.createConnection({
  database: 'restaurant-zaytoon',
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  port: 8889,
});

module.exports = connection;
