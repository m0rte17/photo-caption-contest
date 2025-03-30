'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Images', [
      { url: '/public/images/image1.jpg', createdAt: new Date(), updatedAt: new Date() },
      { url: '/public/images/image2.jpg', createdAt: new Date(), updatedAt: new Date() },
      { url: '/public/images/image3.jpg', createdAt: new Date(), updatedAt: new Date() },
      { url: '/public/images/image4.jpg', createdAt: new Date(), updatedAt: new Date() },
      { url: '/public/images/image5.jpg', createdAt: new Date(), updatedAt: new Date() },
      { url: '/public/images/image6.jpg', createdAt: new Date(), updatedAt: new Date() },
            
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Images', null, {});
  }
};
