const dotenv = require("dotenv");
const path = require("path");

// 실행 모드에 따른 환경 변수 파일 설정
const envFile = path.resolve(
  __dirname,
  `../.env.${process.env.NODE_ENV || "development"}`
);
dotenv.config({ path: envFile });

console.log(`✅ Using environment: ${process.env.NODE_ENV}`);
console.log(`✅ Database Host: ${process.env.DB_HOST}`);
