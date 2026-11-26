// Punto de entrada: monta la app y la envuelve en <BrowserRouter>.
// BrowserRouter usa la barra de direcciones del navegador (History API):
// cambia la URL sin volver a pedir index.html al servidor.
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
