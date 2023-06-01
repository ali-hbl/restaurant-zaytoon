const express = require('express');
const router = express.Router();
const {
  getReservations,
  postReservation,
  updateReservationStatus,
  deleteReservation,
} = require('../controllers/reservationsController');

// GET
router.get('/', getReservations);

// POST
router.post('/post-reservation', postReservation);

// UPDATE
router.post('/update-reservation/:id', updateReservationStatus);

// DELETE
router.delete('/delete-reservation/:id', deleteReservation);

module.exports = router;
