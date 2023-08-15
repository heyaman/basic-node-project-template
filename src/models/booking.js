'use strict';
const {
  Model
} = require('sequelize');
const { BOOKING_STATUS: { INITIATED, PENDING, CANCELLED, COMPLETE, NOT_INITIATED } } = require('../utils/common/constant');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Flight,{
        foreignKey:'flightId'
      })
      this.belongsTo(models.User,{
        foreignKey:'userId'
      })
    }
  }
  Booking.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    flightId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    noOfSeat: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM,
      values: [PENDING, CANCELLED, COMPLETE],
      defaultValue: PENDING
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};