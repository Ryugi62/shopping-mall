import api from "./api";

export async function loginUser(credentials) {
  // 예시 API
  const { data } = await api.post("/auth/login", credentials);
  return data;
}

export async function logoutUser() {
  // 로그아웃 로직 (토큰 삭제 등)
  return true;
}
