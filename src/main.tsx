import "./index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import storage from "./utils/storage.ts";
import { setAuthorizationHeader } from "./api/client.ts";
import AuthProvider from "./pages/auth/auth-provider.tsx";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ui/errors/error-boundary.tsx";

const accesToken = storage.get("auth");
if (accesToken) {
  setAuthorizationHeader(accesToken);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <AuthProvider defaultIsLogged={Boolean(accesToken)}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthProvider>
    </ErrorBoundary>
  </StrictMode>,
);
