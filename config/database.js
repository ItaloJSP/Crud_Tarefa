const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'postgresql://postgres:ncmmkbVbmunJTxQKrFsonENLYdVDPDWs@switchyard.proxy.rlwy.net:57248/railway',
  {
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false, // necessário no Railway
      },
    },
  }
);

module.exports = sequelize;
