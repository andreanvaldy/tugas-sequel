'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Buah extends Model {
    
    static associate(models) {
     
    }
  }
  Buah.init({
    name: DataTypes.STRING,
    warna: DataTypes.STRING,
    price: DataTypes.FLOAT,
    stock: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Buah',
  });
  return Buah;
};