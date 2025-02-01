const dotenv = require('dotenv');
const path = require('path');

// 실행 모드 설정 및 환경 변수 로드
const envFile = path.resolve(__dirname, `.env.${process.env.NODE_ENV || 'development'}`);
dotenv.config({ path: envFile });

console.log(`Using environment: ${process.env.NODE_ENV}`);
console.log(`Database Host: ${process.env.DB_HOST}`);

// Sequelize 설정을 먼저 로드
require('./config/db');

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from ' + process.env.NODE_ENV);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
