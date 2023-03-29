const express = require('express');
const router = express.Router();
const { getTopThree, getAll, getById } = require('../controllers/catalogueController');

// GET all
router.get('/', getAll);

// GET 3 plates
router.get('/top-three', getTopThree)

// GET by ID
router.get('/:id', getById);

module.exports = router;
