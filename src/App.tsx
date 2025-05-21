import { Route, Routes } from "react-router";
import LoginPage from "./pages/auth/login-page";
import AdvertsPage from "./pages/adverts/adverts-page";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/adverts" element={<AdvertsPage />} />
      <Route path="/" element={<AdvertsPage />} />
    </Routes>
  );
}

export default App;
