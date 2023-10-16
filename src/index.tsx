import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ContactProvider } from "./providers";
import { CartPortalProvider } from "./providers/CartPortalProvider/CartPortalProvider";
import { AuthProvider } from "./providers/AuthProvider/AuthProvider";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { LoadingProvider } from "./providers/LoadingProvider/Loading";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <LoadingProvider>
        <AuthProvider>
          <ContactProvider>
            <CartPortalProvider>
              <App />
            </CartPortalProvider>
          </ContactProvider>
        </AuthProvider>
      </LoadingProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
