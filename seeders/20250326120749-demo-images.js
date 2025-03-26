'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images', [
      {
        url: '/images/image1.jpg',
        title: 'Landsacpe',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: '/images/image2.jpg',
        title: 'Room',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: '/images/image3.jpg',
        title: 'Dwarf',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: '/images/image4.jpg',
        title: 'Cat',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: '/images/image5.jpg',
        title: 'Pizza',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        url: '/images/image6.jpg',
        title: 'Christmas',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
