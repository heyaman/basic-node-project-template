'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Cities', [{
      name: 'Dabolim',
      state: 'Goa',
      zipcode: '23345',
      country: 'India',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Ahmedabad',
      state: 'Gujarat',
      zipcode: '987022',
      country: 'India',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Jamnagar',
      state: 'Gujarat',
      zipcode: '29971221',
      country: 'India',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'Mumbai',
      state: 'Maharashtra',
      zipcode: '987654',
      country: 'India',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
