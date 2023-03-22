const express = require('express');
const router = express.Router();
const { getAll, getById } = require('../controllers/catalogueController');

// GET all
router.get('/', getAll);

// GET by ID
router.get('/:id', getById);

module.exports = router;
