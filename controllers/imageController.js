const imageService = require('../services/imageService');

// Get all images
exports.getAllImages = async (req, res) => {
  try {
    const images = await imageService.fetchAllImages();
    res.json(images);
  } catch (error) {
    console.error('Error getting images:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get image by ID with captions
exports.getImageWithCaptions = async (req, res) => {
  try {
    const imageId = req.params.id;
    const image = await imageService.fetchImageWithCaptions(imageId);

    if (!image) {
      return res.status(404).json({ message: 'Image not found' });
    }

    res.json(image);
  } catch (error) {
    console.error('Error getting image with captions:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
