'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('AirPorts', {
      type: 'foreign key',
      name: 'FK_cityId_airport',
      fields: ['cityId'],
      references: {
        table: 'City',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('AirPorts', 'FK_cityId_airport');
  }
};
