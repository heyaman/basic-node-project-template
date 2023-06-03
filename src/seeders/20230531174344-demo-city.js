'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Cities', [{
      name: 'banglore',
      state: 'karnatak',
      zipcode: '233456',
      country: 'India',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'delhi',
      state: 'Delhi',
      zipcode: '12345',
      country: 'India',
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: 'noida',
      state: 'Up',
      zipcode: '299712',
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
