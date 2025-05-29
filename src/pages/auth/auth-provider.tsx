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

  function handleLogin() {
    setIsLogged(true);
    localStorage.setItem("isLogged", "true");
  }

  function handleLogout() {
    setIsLogged(false);
    localStorage.removeItem("isLogged");
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
