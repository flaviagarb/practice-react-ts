import LoginPage from "./pages/auth/login-page";
import AdvertsPage from "./pages/adverts/adverts-page";
import { Navigate, Routes, Route } from "react-router-dom";
import NewAdvertPage from "./pages/adverts/new-advert-page";
import Layout from "./components/ui/layout/layout";
import RequireAuth from "./pages/auth/require-auth";
import AdvertPage from "./pages/adverts/advert-page";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/adverts" element={<Layout />}>
        <Route
          index
          element={
            <RequireAuth>
              <AdvertsPage />
            </RequireAuth>
          }
        />
        <Route
          path=":advertId"
          element={
            <RequireAuth>
              <AdvertPage />
            </RequireAuth>
          }
        />
        <Route
          path="new"
          element={
            <RequireAuth>
              <NewAdvertPage />
            </RequireAuth>
          }
        />
      </Route>
      <Route path="/" element={<Navigate to="/adverts" />} />
      <Route
        path="/404"
        element={
          <RequireAuth>
            <div> 404 | Not Found </div>
          </RequireAuth>
        }
      />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;
