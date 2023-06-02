const express = require('express');
const router = express.Router();
const { getOrders, postOrder, deleteOrder } = require('../controllers/ordersController');

// GET
router.get('/', getOrders);

// POST
router.post('/post-order', postOrder);

// DELETE
router.delete('/delete-order/:id', deleteOrder);

module.exports = router;
