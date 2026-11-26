// Error 404: la muestra la ruta comodín "*" de App.jsx cuando la URL no existe.
import { Link, useLocation } from "react-router";

export default function NotFound() {
  const { pathname } = useLocation(); // la URL que el usuario escribió
  return (
    <div className="pagina centrada">
      <div className="tarjeta error">
        <p className="codigo">404</p>
        <h1>Esta ruta no está en el mapa</h1>
        <p>No encontramos <code>{pathname}</code>.</p>
        <Link to="/" className="boton">← Volver al inicio</Link>
      </div>
    </div>
  );
}
