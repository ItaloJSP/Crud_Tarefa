const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.URL_DO_BANCO_DE_DADOS, {
  dialect: 'postgres',
  protocol: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

module.exports = sequelize;