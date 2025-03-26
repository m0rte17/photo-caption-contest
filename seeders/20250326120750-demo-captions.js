'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Captions', [
      {
        text: 'When Sequelize finally works ✅',
        imageId: 1, 
        userId: 1, 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'Me deploying to Render like 💥',
        imageId: 2,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        text: 'Caption contests are life 🏆',
        imageId: 3,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Captions', null, {});
  }
};
