'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('AirPlanes', [{
      modelNumber: 'flight-220-123',
      capacity: 90,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      modelNumber: 'flight-qwe-456',
      capacity: 100,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
