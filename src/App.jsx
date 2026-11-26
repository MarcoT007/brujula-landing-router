// Mapa de rutas de la SPA: cada <Route> une una URL con el componente (vista) que se muestra.
// <Routes> elige la primera ruta que coincide con la URL actual.
import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import QuienesSomos from "./pages/QuienesSomos";
import Terminos from "./pages/Terminos";
import Condiciones from "./pages/Condiciones";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/quienes-somos" element={<QuienesSomos />} />
      <Route path="/terminos" element={<Terminos />} />
      <Route path="/condiciones" element={<Condiciones />} />
      {/* Comodín: cualquier URL que no coincida con las anteriores muestra el Error 404 */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
