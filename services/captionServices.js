const { Caption } = require("../models");

exports.updateCaption = async (captionId, text, userId) => {
    const caption = await Caption.findByPk(captionId);
    if (!caption) {
        throw new Error("Caption not found");
    }
    
    if (caption.userId !== userId) {
        throw new Error("Unauthorized");
    }

    caption.text = text;
    return await caption.save();
};

exports.deleteCaption = async (captionId, userId) => {
    const caption = await Caption.findByPk(captionId);
    if (!caption) {
        throw new Error("Caption not found");
    }
    
    if (caption.userId !== userId) {
        throw new Error("Unauthorized");
    }

    return await caption.destroy();
};

