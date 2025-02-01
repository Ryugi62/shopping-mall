import React, { createContext, useState, useContext } from 'react';

// AuthContext 생성
const AuthContext = createContext();

// AuthContext를 사용하는 hook
export function useAuthContext() {
  return useContext(AuthContext);
}

// AuthProvider 컴포넌트
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = () => {
    setUser(null);
  };

  const value = { user, login, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
