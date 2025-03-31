const express = require("express");
const router = express.Router();
const imageController = require("../controllers/imageControllers");
const { isAuthenticated } = require('../middlewares/authMiddleware');

router.get("/", imageController.getAllImages);
router.get("/:id", imageController.getImageById);
router.post("/:id/captions", isAuthenticated, imageController.addCaptionToImage);

module.exports = router;
