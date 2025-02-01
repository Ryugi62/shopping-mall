import { useAuthContext } from "../contexts/AuthContext";

// AuthContext를 쉽게 사용하기 위한 custom hook
export default function useAuth() {
  const { user, login, logout } = useAuthContext();
  return { user, login, logout };
}
