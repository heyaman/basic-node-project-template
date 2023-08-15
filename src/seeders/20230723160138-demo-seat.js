'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Seats', [{
      row: 1,
      col: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      airPlaneId: 1
    },{
      row: 1,
      col: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      airPlaneId: 1
    },
    {
      row: 1,
      col: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      airPlaneId: 1
    },
    {
      row: 2,
      col: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      airPlaneId: 1
    },
    {
      row: 2,
      col: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      airPlaneId: 1
    },
    {
      row: 2,
      col: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      airPlaneId: 1
    },
    {
      row: 1,
      col: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      airPlaneId: 2
    },{
      row: 1,
      col: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      airPlaneId: 2
    },
    {
      row: 1,
      col: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      airPlaneId: 2
    },
    {
      row: 2,
      col: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
      airPlaneId: 1
    },
    {
      row: 2,
      col: 2,
      createdAt: new Date(),
      updatedAt: new Date(),
      airPlaneId: 2
    },
    {
      row: 2,
      col: 3,
      createdAt: new Date(),
      updatedAt: new Date(),
      airPlaneId: 2
    }
  ])
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
