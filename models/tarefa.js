const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Tarefa = sequelize.define('Tarefa', {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descricao: {
    type: DataTypes.STRING,
  },
  concluida: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Tarefa;
