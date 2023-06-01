const express = require('express');
const router = express.Router();
const { getReservations, postReservation, deleteReservation } = require('../controllers/reservationsController');

// GET
router.get('/', getReservations);

// POST
router.post('/post-reservation', postReservation);

// DELETE
router.delete('/delete-reservation/:id', deleteReservation);

module.exports = router;
