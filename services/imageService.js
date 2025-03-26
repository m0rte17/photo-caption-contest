const { Image, Caption, User } = require('../models');

// Return all images
exports.fetchAllImages = async () => {
  return await Image.findAll({
    attributes: ['id', 'title', 'url'],
    order: [['id', 'ASC']],
  });
};

// Return a single image with all its captions
exports.fetchImageWithCaptions = async (id) => {
  return await Image.findByPk(id, {
    attributes: ['id', 'title', 'url'],
    include: [{
      model: Caption,
      attributes: ['id', 'text', 'createdAt'],
      include: [{
        model: User,
        attributes: ['id', 'username']
      }]
    }]
  });
};
