import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import App from "./App";
import AppRoute from "./apps/AppRoute";
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

const PUBLIC_URL = process.env.PUBLIC_URL || "/";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={PUBLIC_URL}>
      <AppRoute />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
