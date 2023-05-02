const express = require('express');
const router = express.Router();
const { postOrder } = require('../controllers/ordersController');

router.post('/', postOrder);

module.exports = router;
