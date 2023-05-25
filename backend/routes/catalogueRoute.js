const express = require('express');
const router = express.Router();
const {
  getTopThree,
  getAll,
  getById,
  postDish,
  updateDish,
  deleteDish,
  handleFileUpload,
} = require('../controllers/catalogueController');

// GET all
router.get('/', getAll);

// GET 3 plates
router.get('/top-three', getTopThree);

// GET by ID
router.get('/:id', getById);

// INSERT
router.post('/post-dish', postDish);

// UPDATE
router.put('/update-dish/:id', updateDish);

// DELETE
router.delete('/delete-dish/:id', deleteDish);

// FILE UPLOAD
router.post('/upload', handleFileUpload);

module.exports = router;
