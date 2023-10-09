const mysql = require('mysql2');
const dotenv = require('dotenv').config();

// Connection to DB
const connection = mysql.createConnection({
  database: process.env.DB_DATABASE,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

module.exports = connection;
