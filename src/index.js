import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterDefault } from "./routes/RouterDefault";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
const queryMovie = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryMovie}>
    <RouterDefault />
    </QueryClientProvider>
  </React.StrictMode>
);
