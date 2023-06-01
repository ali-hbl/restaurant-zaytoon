const express = require('express');
const router = express.Router();
const { postOrder, getOrders } = require('../controllers/ordersController');

router.get('/', getOrders);
router.post('/post-order', postOrder);

module.exports = router;
