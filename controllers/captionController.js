const captionService = require('../services/captionService');

// Add a caption to an image
exports.addCaptionToImage = async (req, res) => {
  try {
    const imageId = req.params.id;
    const text = req.body.text;
    const userId = req.user.id;

    if (!text) {
      return res.status(400).json({ message: 'Caption text is required' });
    }

    const newCaption = await captionService.createCaption({ userId, imageId, text });

    res.status(201).json(newCaption);
  } catch (error) {
    console.error('Error adding caption:', error);
    res.status(500).json({ message: 'Server error' });
  }
};
