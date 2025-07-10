const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
  process.env.DB_NAME,    // nome do banco
  process.env.DB_USER,    // usuário
  process.env.DB_PASSWORD, // senha
  {
    host: process.env.DB_HOST, // host do banco
    port: process.env.DB_PORT, // porta (opcional, mas recomendado)
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

module.exports = sequelize;
