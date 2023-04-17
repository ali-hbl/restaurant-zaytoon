const express = require('express');
const router = express.Router();
const { postMessage } = require('../controllers/messagesController');

router.post('/', postMessage);

module.exports = router;
