const { Caption } = require('../models');

// Create a new caption
exports.createCaption = async ({ userId, imageId, text }) => {
  return await Caption.create({ userId, imageId, text });
};
