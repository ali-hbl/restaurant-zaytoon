const express = require('express');
const router = express.Router();
const { getUsers, getUserById, getUserRole, postUser, deleteUser } = require('../controllers/usersController');

//GET
router.get('/get-users', getUsers);

// GET by ID
router.get('/:id', getUserById);

// GET role
router.get('/role/:id', getUserRole);

// POST
router.post('/', postUser);

// DELETE
router.delete('/delete-user/:id', deleteUser);

module.exports = router;
