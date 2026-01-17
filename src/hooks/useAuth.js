"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getCookie } from "cookies-next";

const AUTH_TOKEN =
  "8f3b6c1f4e6a9c1d2b7a4f9c3e8d1a6b5c7f2e9d4a1b8c6f3d5e7a9b2c4";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const token = getCookie("auth-token");

    const timeoutId = setTimeout(() => {
      setIsAuthenticated(token === AUTH_TOKEN);
      setIsLoading(false);
    }, 0);

    return () => clearTimeout(timeoutId);
  }, []);

  const login = async (email, password) => {
    const hardcodedEmail = "rakibul@gmail.com";
    const hardcodedPassword = "password123";

    if (email !== hardcodedEmail || password !== hardcodedPassword) {
      throw new Error("Invalid credentials");
    }

    document.cookie = `auth-token=${AUTH_TOKEN}; path=/; max-age=604800`;
    setIsAuthenticated(true);

    return { success: true };
  };

  const logout = () => {
    document.cookie =
      "auth-token=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return context;
};

export default useAuth;
