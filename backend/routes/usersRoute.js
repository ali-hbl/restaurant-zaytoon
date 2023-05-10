const express = require('express');
const router = express.Router();
const { getUserById, getUserRole, postUser } = require('../controllers/usersController');

// GET by ID
router.get('/:id', getUserById);

// GET role
router.get('/role/:id', getUserRole);

// POST
router.post('/', postUser);

module.exports = router;
