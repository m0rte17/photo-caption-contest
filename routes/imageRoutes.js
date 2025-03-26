const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');
const captionController = require('../controllers/captionController');
const { authenticateToken } = require('../middleware/authMiddleware');

// GET /api/images
router.get('/', imageController.getAllImages);

// GET /api/images/:id (with captions)
router.get('/:id', imageController.getImageWithCaptions);

// POST /api/images/:id/captions
router.post('/:id/captions', authenticateToken, captionController.addCaptionToImage);

module.exports = router;
