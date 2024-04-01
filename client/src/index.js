import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "../../client/dist/output.css";

import App from "./App.jsx";

const root = createRoot(document.getElementById('root'), HTMLElement) ;
root.render(

    <App />

);
