const express = require('express');
const router = express.Router();
const { getMessages, postMessage, deleteMessage } = require('../controllers/messagesController');

// GET
router.get('/', getMessages);

// POST
router.post('/post-message', postMessage);

// DELETE
router.delete('/delete-message/:id', deleteMessage);

module.exports = router;
