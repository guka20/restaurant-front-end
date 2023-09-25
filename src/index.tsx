import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContactProvider } from "./providers";
import { CartPortalProvider } from "./providers/CartPortalProvider/CartPortalProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ContactProvider>
      <CartPortalProvider>
        <App />
      </CartPortalProvider>
    </ContactProvider>
  </React.StrictMode>
);
