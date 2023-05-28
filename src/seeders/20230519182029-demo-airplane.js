'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('AirPlanes', [{
      modelNumber: 'flight-XYZ-123',
      capacity: 50,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      modelNumber: 'flight-ABC-456',
      capacity: 70,
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
