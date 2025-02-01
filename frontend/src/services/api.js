import axios from "axios";

// 기본 Axios 인스턴스를 생성해 필요에 따라 사용
const api = axios.create({
  baseURL: "https://fakestoreapi.com/", // 예시
});

export default api;
