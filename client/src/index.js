import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./assets/stylesheets/styles.css";
import { BrowserRouter } from "react-router-dom";


import App from "./App.jsx";

const root = createRoot(document.getElementById('root') as HTMLElement) ;
root.render(

    <App />

);
