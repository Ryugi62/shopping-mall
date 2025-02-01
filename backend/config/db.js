const { Sequelize } = require('sequelize');
require('dotenv').config();

console.log("🔍 환경 변수 확인:");
console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD:", process.env.DB_PASSWORD ? '*****' : 'NOT SET');
console.log("DB_HOST:", process.env.DB_HOST);

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: process.env.DB_PORT || 3306,
    logging: console.log, // ✅ SQL 쿼리 로그 추가
  }
);

module.exports = sequelize;
