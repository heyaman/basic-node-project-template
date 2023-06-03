'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // await queryInterface.createTable('AirPorts', {
    //   id: {
    //     allowNull: false,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     type: Sequelize.INTEGER
    //   },
    //   name: {
    //     type: Sequelize.STRING
    //   },
    //   uniqueIdentifier: {
    //     type: Sequelize.STRING,
    //     unique: true
    //   },
    //   cityId: {
    //     type: Sequelize.INTEGER
    //   },
    //   createdAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   },
    //   updatedAt: {
    //     allowNull: false,
    //     type: Sequelize.DATE
    //   }
    // });
   await queryInterface.addConstraint('AirPorts', ['cityId'], {
      type: 'FOREIGN KEY',
      name: 'FK_cityId_airport', // useful if using queryInterface.removeConstraint
      references: {
        table: 'City',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('AirPorts');
  }
};