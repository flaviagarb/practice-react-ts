import LoginPage from "./pages/auth/login-page";
import AdvertsPage from "./pages/adverts/adverts-page";
import { useAuth } from "./pages/auth/context";

function App() {
  const { isLogged } = useAuth();
  return isLogged ? <AdvertsPage active /> : <LoginPage />;
}

export default App;
