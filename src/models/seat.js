'use strict';
const {
  Model
} = require('sequelize');
const { SEAT_TYPE:{ECONOMY, BUSINESS, FIRST_CLASS, PREMIUM_ECONOMY} } = require('../utils/common/constant');
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.AirPlane, {
        foreignKey: 'airPlaneId'
      });
    }
  }
  Seat.init({
    row: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    col: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    airPlaneId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seatType: {
      type: DataTypes.ENUM,
      values: [ECONOMY, BUSINESS, FIRST_CLASS, PREMIUM_ECONOMY],
      defaultValue: ECONOMY
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};