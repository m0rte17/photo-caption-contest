const express = require("express");
const router = express.Router();
const imageController = require("../controllers/imageControllers");
const { isAuthenticated } = require('../middlewares/authMiddleware');
const { validateCaption } = require('../middlewares/validation');

router.get("/", imageController.getAllImages);
router.get("/:id", imageController.getImageById);
router.post("/:id/captions", isAuthenticated, validateCaption, imageController.addCaptionToImage);

module.exports = router;
