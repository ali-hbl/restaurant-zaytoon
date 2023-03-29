const express = require('express');
const router = express.Router();
const { getAll, getUserById, postUser, updateUser, deleteUser } = require('../controllers/usersController');

// GET all
router.get('/', getAll);

// GET by ID
router.get('/:id', getUserById);

// POST
router.post('/', postUser);

// UPDATE
router.get('/:id', updateUser);

// DELETE
router.get('/:id', deleteUser);

module.exports = router;
