const { Image, Caption, User } = require("../models");

exports.getAllImages = async () => {
    return await Image.findAll();
};

exports.getImageById = async (id) => {
    return await Image.findByPk(id, {
        include: {
            model: Caption,
            include: [ User ]
        }
    });
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

