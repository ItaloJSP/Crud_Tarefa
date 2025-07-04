const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('CRUD', 'postgres', 'Admin', {
  host: 'localhost',
  dialect: 'postgres',
});

module.exports = sequelize;
