'use strict';
const { DataTypes } = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addConstraint('AirPorts', {
      type: 'foreign key',
      name: 'FK_cityId_airport',
      fields: ['cityId'],
      references: {
        table: 'Cities',
        field: 'id'
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE',
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeConstraint('AirPorts', 'FK_cityId_airport');
  }
};
