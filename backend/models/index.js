const sequelize = require('../config/db');

const User = require('./User');
const Product = require('./Product');
const Order = require('./Order');

// 관계 설정
User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

Product.hasMany(Order, { foreignKey: 'productId' });
Order.belongsTo(Product, { foreignKey: 'productId' });

const db = {
  sequelize,
  User,
  Product,
  Order,
};

// ✅ 테이블이 생성되는지 확인하는 로그 추가
console.log("🔄 Synchronizing database...");

sequelize.sync({ alter: true }) // 테이블이 없으면 생성됨
  .then(async () => {
    console.log('✅ Database & tables synced successfully');
  })
  .catch((err) => {
    console.error('❌ Database sync error:', err);
  });

module.exports = db;
