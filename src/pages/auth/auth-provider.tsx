import { useState, type ReactNode } from "react";
import { AuthContext } from "./context";

interface AuthProviderProps {
  defaultIsLogged: boolean;
  children: ReactNode;
}

function AuthProvider({ defaultIsLogged, children }: AuthProviderProps) {
  const [isLogged, setIsLogged] = useState(() => {
    return localStorage.getItem("isLogged") === "true" || defaultIsLogged;
  });

  function handleLogin(rememberMe: boolean, accessToken: string) {
    setIsLogged(true);
    if (rememberMe) {
      localStorage.setItem("isLogged", "true");
      localStorage.setItem("auth", accessToken);
    }
  }

  function handleLogout() {
    setIsLogged(false);
    localStorage.removeItem("isLogged");
    localStorage.removeItem("auth");
  }

  const authValue = {
    isLogged,
    onLogin: handleLogin,
    onLogout: handleLogout,
  };

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
