const express = require('express');
const router = express.Router();
const { getUserById, postUser } = require('../controllers/usersController');

// GET by ID
router.get('/:id', getUserById);

// POST
router.post('/', postUser);

module.exports = router;
