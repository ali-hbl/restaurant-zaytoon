const express = require('express');
const router = express.Router();
const { getReservations, getOrders } = require('../controllers/profileController');

// GET reservations
router.get('/:id/my-reservations', getReservations);

// GET orders
router.get('/:id/my-orders', getOrders);

module.exports = router;
