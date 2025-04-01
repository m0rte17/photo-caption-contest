const express = require('express');
const router = express.Router();
const captionController = require('../controllers/captionControllers');

// Update caption
router.put('/:captionId', captionController.updateCaption);

// Delete caption
router.delete('/:captionId', captionController.deleteCaption);

module.exports = router;

