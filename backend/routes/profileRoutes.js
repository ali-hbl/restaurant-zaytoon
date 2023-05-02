const express = require('express');
const router = express.Router();
const { getReservations, getOrders } = require('../controllers/profileController');

// GET reservations
router.get('/my-reservations', getReservations);

// GET orders
router.get('/my-orders', getOrders);

module.exports = router;
