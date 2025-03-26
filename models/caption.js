'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Caption extends Model {
    static associate(models) {
      // Each caption belongs to one user and one image
      Caption.belongsTo(models.User, { foreignKey: 'userId' });
      Caption.belongsTo(models.Image, { foreignKey: 'imageId' });
    }
  }
  Caption.init({
    text: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    imageId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Caption',
  });
  return Caption;
};
