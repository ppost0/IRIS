import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "../../client/dist/output.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom"

const root = createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>

);
