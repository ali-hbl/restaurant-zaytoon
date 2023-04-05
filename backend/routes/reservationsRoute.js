const express = require('express');
const router = express.Router();
const { postReservation } = require('../controllers/reservationsController');

router.post('/', postReservation);

module.exports = router;
