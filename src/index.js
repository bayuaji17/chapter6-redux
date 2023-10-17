import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterDefault } from "./routes/RouterDefault";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GoogleOAuthProvider } from "@react-oauth/google";
const queryMovie = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryMovie}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_OAUTH_GOOGLE_ID}>
        <RouterDefault />
      </GoogleOAuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
