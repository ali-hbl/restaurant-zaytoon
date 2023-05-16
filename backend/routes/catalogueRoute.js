const express = require('express');
const router = express.Router();
const { getTopThree, getAll, getById, postDish, deleteDish } = require('../controllers/catalogueController');

// GET all
router.get('/', getAll);

// GET 3 plates
router.get('/top-three', getTopThree);

// GET by ID
router.get('/:id', getById);

// INSERT
router.post('/insert-dish', postDish);

// DELETE
router.delete('/delete-dish/:id', deleteDish);

module.exports = router;
