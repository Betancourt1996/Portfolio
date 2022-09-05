'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class usuarios extends Model {

    static associate(models) {
      // define association here
    }
  }
  usuarios.init({
    usuario: DataTypes.STRING,
    contra: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'usuarios',
  });
  return usuarios;
};