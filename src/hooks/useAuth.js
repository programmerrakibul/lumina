"use client";

import { useState, useEffect } from "react";
import { getCookie } from "cookies-next";
import { sleep } from "@/utils/sleep";

export function useAuth() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      await sleep(1000);

      const token = getCookie("auth-token");

      setIsAuthenticated(
        token === "8f3b6c1f4e6a9c1d2b7a4f9c3e8d1a6b5c7f2e9d4a1b8c6f3d5e7a9b2c4",
      );

      setIsLoading(false);
    })();
  }, []);

  const login = async (email, password) => {
    await sleep(1000);

    const hardcodedEmail = "rakibul@gmail.com";
    const hardcodedPassword = "password123";

    if (email === hardcodedEmail && password === hardcodedPassword) {
      document.cookie =
        "auth-token=8f3b6c1f4e6a9c1d2b7a4f9c3e8d1a6b5c7f2e9d4a1b8c6f3d5e7a9b2c4; path=/; max-age=604800";

      setIsAuthenticated(true);

      return { success: true };
    } else {
      const error = new Error("Invalid credentials");
      error.code = 401;
      error.success = false;
      throw error;
    }
  };

  const logout = () => {
    document.cookie = "auth-token=; path=/; max-age=0";
    setIsAuthenticated(false);
  };

  return { isAuthenticated, isLoading, login, logout };
}
