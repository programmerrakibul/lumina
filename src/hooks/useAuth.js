"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { getCookie } from "cookies-next";
import { useRouter } from "next/navigation";

const authToken = process.env.NEXT_PUBLIC_AUTH_TOKEN;

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const token = getCookie("auth-token");

    const timeoutId = setTimeout(() => {
      setIsAuthenticated(token === authToken);
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

    document.cookie = `auth-token=${authToken}; path=/; max-age=604800`;
    setIsAuthenticated(true);

    return { success: true };
  };

  const logout = () => {
    document.cookie =
      "auth-token=; path=/; max-age=0; expires=Thu, 01 Jan 1970 00:00:00 GMT";
    setIsAuthenticated(false);
    router.push("/login");
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
