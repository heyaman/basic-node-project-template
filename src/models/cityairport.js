'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CityAirPort extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.City,{
        foreignKey:'cityId'
      });
      this.belongsTo(models.AirPort,{
        foreignKey:'airPortId'
      });
    }
  }
  CityAirPort.init({
    cityId: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    airPortId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'CityAirPort',
  });
  return CityAirPort;
};