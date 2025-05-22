import { createContext, useContext } from "react";

export const AuthContext = createContext({
  isLogged: false,
  onLogin: () => {},
  onLogout: () => {},
});

// Custom Hook
export function useAuth() {
  const authValue = useContext(AuthContext);
  return authValue;
}
