const dotenv = require('dotenv');
const path = require('path');

// 실행 모드 (기본값: development)
const envFile = `.env.${process.env.NODE_ENV || 'development'}`;

// 환경 변수 로드
dotenv.config({ path: path.resolve(__dirname, envFile) });

console.log(`Using environment: ${process.env.NODE_ENV}`);
console.log(`Database Host: ${process.env.DB_HOST}`);

const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from ' + process.env.NODE_ENV);
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
