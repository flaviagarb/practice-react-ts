import { Route, Routes } from "react-router";
import LoginPage from "./pages/auth/login-page";
import AdvertsPage from "./pages/adverts/adverts-page";
import { useState } from "react";

interface AppProps {
  defaultIsLogged: boolean;
}
function App({ defaultIsLogged }: AppProps) {
  const [isLogged, setLogged] = useState(defaultIsLogged);

  function handleLogin() {
    setIsLogged(true);
  }

  function handleLogout() {
    setIsLogged(false);
  }

  return (
    <Routes>
      <Route path="/login" element={<LoginPage onLogin={handleLogin} />} />
      <Route
        path="/adverts"
        element={<AdvertsPage active onLogout={handleLogout} />}
      />
      <Route
        path="/"
        element={<AdvertsPage active onLogout={handleLogout} />}
      />
    </Routes>
  );
}

export default App;
