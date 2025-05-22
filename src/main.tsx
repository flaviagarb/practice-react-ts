import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import "./index.css";
import App from "./App.tsx";
import storage from "./utils/storage.ts";
import { setAuthorizationHeader } from "./api/client.ts";

const accesToken = storage.get("auth");
if (accesToken) {
  setAuthorizationHeader(accesToken);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <App defaultIsLogged={Boolean(accesToken)} />
    </BrowserRouter>
  </StrictMode>,
);
