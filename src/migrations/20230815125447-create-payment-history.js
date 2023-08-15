'use strict';

const { PAYMENT_STATUS: { NOT_PAID, SUCCESS, FAILED } } = require('../utils/common/constant');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('PaymentHistories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      bookingId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Bookings',
          key: 'id',
          onDelete: 'CASCADE',
        },
        allowNull: false
      },
      amount: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      amountPaid: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      balance: {
        type: Sequelize.INTEGER,
        defaultValue: 0
      },
      status: {
        type: Sequelize.ENUM,
        values: [NOT_PAID, SUCCESS, FAILED],
        defaultValue: NOT_PAID
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('PaymentHistories');
  }
};