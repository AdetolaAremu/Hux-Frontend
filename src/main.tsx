import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PublicLayout from "./Layouts/Public.tsx";
import AuthLayout from "./Layouts/Auth.tsx";
import Private from "./Layouts/Private.tsx";
import { Provider } from "react-redux";
import { store } from "./store/RootReducer";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<PublicLayout />} />
          <Route path="/auth/*" element={<AuthLayout />} />
          <Route path="/user/*" element={<Private />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
