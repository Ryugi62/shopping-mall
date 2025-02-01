# 쇼핑몰 프로젝트 (Shopping Mall Project)

## 📌 프로젝트 개요
이 프로젝트는 최신 웹 기술을 활용하여 전자상거래 플랫폼을 구축하는 데 초점을 맞춘 풀스택 애플리케이션입니다. 
React 기반의 프론트엔드와 Node.js 및 MySQL을 사용한 백엔드 시스템을 통합하여 사용자 인증, 상품 관리, 장바구니 및 결제 기능을 제공하는 구조로 설계되었습니다. 
본 프로젝트는 확장성과 유지보수성을 고려하여 개발되었으며, 프리랜서 포트폴리오 구축을 목적으로 합니다.

## 🚀 기술 스택
### **프론트엔드 (Frontend: React + Vite)**
- **React 18+**: 컴포넌트 기반의 동적 UI 구축
- **Vite**: 빠른 개발 환경 및 번들링 최적화
- **React Router**: 클라이언트 사이드 라우팅 지원
- **Axios**: API 요청 및 데이터 통신 관리
- **Tailwind CSS**: 효율적인 스타일링 및 UI 디자인

### **백엔드 (Backend: Node.js + Express)**
- **Express.js**: 경량화된 서버 애플리케이션 프레임워크
- **MySQL & Sequelize**: 관계형 데이터베이스 및 ORM(Object-Relational Mapping) 지원
- **JWT (JSON Web Token)**: 안전한 사용자 인증 및 세션 관리
- **bcrypt.js**: 사용자 비밀번호 암호화 및 보안 강화
- **dotenv**: 환경 변수 관리 및 보안 설정

### **데이터베이스 (Database)**
- **MySQL**: 확장성과 안정성을 고려한 관계형 데이터베이스

## 📂 프로젝트 폴더 구조
```
shopping-mall/
├── backend/
│   ├── config/            # 환경 설정 및 데이터베이스 연결
│   ├── controllers/       # 비즈니스 로직 구현
│   ├── middlewares/       # 요청 처리 및 인증 미들웨어
│   ├── models/            # 데이터베이스 모델 정의
│   ├── routes/            # API 엔드포인트 관리
│   ├── services/          # 비즈니스 로직 보조 기능
│   ├── app.js             # 서버 애플리케이션 엔트리포인트
│   ├── package.json       # 백엔드 패키지 정보
│   └── .env.example       # 환경 변수 예시 파일
│
├── frontend/
│   ├── public/            # 정적 파일
│   ├── src/
│   │   ├── assets/        # 이미지 및 스타일 파일
│   │   ├── components/    # 재사용 가능한 UI 컴포넌트
│   │   ├── hooks/         # 커스텀 훅 관리
│   │   ├── pages/         # 개별 페이지 구성
│   │   ├── services/      # API 호출 모듈
│   │   ├── context/       # 글로벌 상태 관리 (React Context API)
│   │   ├── utils/         # 유틸리티 함수
│   │   ├── App.jsx        # 메인 애플리케이션 컴포넌트
│   │   ├── index.jsx      # 애플리케이션 엔트리포인트
│   ├── package.json       # 프론트엔드 패키지 정보
│   ├── vite.config.js     # Vite 설정 파일
│   ├── .env.example       # 환경 변수 예시 파일
│   └── README.md          # 프로젝트 설명 파일
│
└── .gitignore             # Git 버전 관리 제외 파일 목록
```

## 🛠️ 환경 변수 설정 (.env 파일 예시)
환경 변수 파일을 설정하여 프로젝트 실행 시 민감한 정보를 관리합니다.

### **백엔드 (`backend/.env.example`)**
```
NODE_ENV=development
PORT=3001
DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=shopping_mall
JWT_SECRET=your_jwt_secret
```

### **프론트엔드 (`frontend/.env.example`)**
```
VITE_API_BASE_URL=http://localhost:3001
VITE_APP_ENV=development
```

## ⚙️ 실행 방법
### 1️⃣ 프로젝트 클론
```bash
git clone https://github.com/your-username/your-repo.git
cd shopping-mall
```

### 2️⃣ 백엔드 실행
```bash
cd backend
npm install
npm run development
```

### 3️⃣ 프론트엔드 실행
```bash
cd ../frontend
npm install
npm run dev
```

## 📌 API 엔드포인트
| 기능            | HTTP 메서드 | 엔드포인트         |
|---------------|-----------|----------------|
| 회원가입       | POST      | /api/auth/register |
| 로그인        | POST      | /api/auth/login |
| 상품 목록 조회 | GET       | /api/products |
| 상품 상세 조회 | GET       | /api/products/:id |
| 장바구니 추가 | POST      | /api/cart |
| 주문 생성     | POST      | /api/orders |

## ✅ 주요 기능
- 🔑 **사용자 인증** (JWT 기반 회원가입 & 로그인 기능)
- 🛍️ **상품 관리** (상품 등록, 조회 및 필터링 기능)
- 🛒 **장바구니 기능** (사용자별 장바구니 관리)
- 💳 **결제 기능** (추후 Stripe 또는 결제 API 통합 예정)
- 🛠️ **관리자 페이지** (상품 추가, 수정, 삭제 기능)

## 🔗 배포 링크 (추후 추가 예정)
- **프론트엔드:** [https://your-frontend-url.com](https://your-frontend-url.com)
- **백엔드 API:** [https://your-backend-url.com](https://your-backend-url.com)

## 🤝 기여 방법
1. **프로젝트 포크**
2. **새로운 브랜치 생성** (`feature/새로운기능`)
3. **변경 사항 커밋** (`git commit -m '새로운 기능 추가'`)
4. **브랜치 푸시** (`git push origin feature/새로운기능`)
5. **Pull Request 생성**

## 📜 라이선스
이 프로젝트는 **MIT 라이선스**를 준수하며, 누구나 자유롭게 수정 및 배포할 수 있습니다.

