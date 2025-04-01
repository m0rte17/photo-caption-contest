const imageServices = require("../services/imageServices");

exports.getAllImages = async (req, res) => {
    try {
        const images = await imageServices.getAllImages();
        res.status(200).json(images);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch images' });
    }
};

exports.getImageById = async (req, res) => {
    try {
        const image = await imageServices.getImageById(req.params.id);
        if (!image) {
            return res.status(404).json({ error: 'Image not found'});
        }
        res.status(200).json(image);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch image' });
    }
};

exports.addCaptionToImage = async (req, res) => {
    const { text } = req.body;
    const imageId = req.params.id;
    const userId = req.session.userId;
    if (!userId) {
        return res.status(401).json({ error: 'Unauthorized' });
    }
    
    try {
        const caption = await imageServices.addCaptionToImage(imageId, userId, text);
        res.status(201).json(caption);
    } catch (error) {
        res.status(400).json({ error: 'Failed to add caption' });
    }
};