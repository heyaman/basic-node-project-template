'use strict';
const {
  Model
} = require('sequelize');
const { PAYMENT_STATUS: { NOT_PAID, SUCCESS, FAILED } } = require('../utils/common/constant');
module.exports = (sequelize, DataTypes) => {
  class PaymentHistory extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Booking, {
        foreignKey: 'bookingId'
      });
    }
  }
  PaymentHistory.init({
    bookingId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    amount: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    amountPaid: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    balance: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    status: {
      type: DataTypes.ENUM,
      values: [NOT_PAID, SUCCESS, FAILED],
      defaultValue: NOT_PAID
    }
  }, {
    sequelize,
    modelName: 'PaymentHistory',
  });
  return PaymentHistory;
};