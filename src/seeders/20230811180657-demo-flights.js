'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Flights', [{
      flightNumber: 'flight-xyz-001',
      airplaneId: 1,
      departureAirportId: 20,
      arrivalAirportId: 21,
      arrivalTime: new Date('08-15-2023 22:00:00'),
      departureTime: new Date('08-15-2023 20:00:00'),
      seatRemaining: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      flightNumber: 'flight-xyz-002',
      airplaneId: 1,
      departureAirportId: 21,
      arrivalAirportId: 22,
      arrivalTime: new Date('08-15-2023 22:00:00'),
      departureTime: new Date('08-15-2023 20:00:00'),
      seatRemaining: 50,
      createdAt: new Date(),
      updatedAt: new Date(),
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
