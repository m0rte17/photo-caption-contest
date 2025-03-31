const express = require("express");
const router = express.Router();
const imageController = require("../controllers/imageControllers");

router.get("/", imageController.getAllImages);
router.get("/:id", imageController.getImageById);
router.post("/:id/captions", imageController.addCaptionToImage);

module.exports = router;
