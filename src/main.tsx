import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./global.css";
import React from "react";
// import { BrowserRouter, Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(

    <React.StrictMode>
      <App />
    </React.StrictMode>
  
);
