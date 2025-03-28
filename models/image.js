'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Image extends Model {
    static associate(models) {
      // One image has many captions
      Image.hasMany(models.Caption, { foreignKey: 'imageId' });
    }
  }
  Image.init({
    url: DataTypes.STRING,
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Image',
  });
  return Image;
};
