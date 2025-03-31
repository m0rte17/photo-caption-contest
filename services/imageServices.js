const { Image, Caption, User } = require("../models");
const { cache } = require("../utils/cache");

exports.getAllImages = async () => {
    const cacheKey = 'allImages';
    const cachedResult = cache.get(cacheKey);

    if (cachedResult) {
        return cachedResult;
    }

    const images = await Image.findAll();
    cache.set(cacheKey, images);
    return images;
};

exports.getImageById = async (id) => {
    const cacheKey = `image_${id}`;
    const cachedResult = cache.get(cacheKey);

    if (cachedResult) {
        return cachedResult;
    }

    const image = await Image.findByPk(id, {
        include: {
            model: Caption,
            include: [ User ]
        }
    });
    
    cache.set(cacheKey, image);
    return image;
};

exports.addCaptionToImage = async (imageId, userId, text) => {
    const image = await Image.findByPk(imageId);
    if (!image) {
        throw new Error("Image not found");
    }

    return await Caption.create({
        text,
        imageId,
        userId
    });
};

