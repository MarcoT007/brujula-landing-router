// Dashboard (ruta "/dashboard"). Barra lateral con "Cerrar sesión" para regresar a la Landing Page.
import { Link } from "react-router";

export default function Dashboard() {
  return (
    <div className="panel">
      <aside className="lateral">
        <p className="marca">▲ BRÚJULA</p>
        <p className="activo">Mi progreso</p>
        <p>Guías de estudio</p>
        <p>Becas y admisión</p>
        <Link to="/" className="salir">Cerrar sesión</Link>
      </aside>
      <main className="contenido">
        <h1>Hola de nuevo 👋</h1>
        <p>Este es tu panel. Aquí verás tus repasos del día y las convocatorias que guardaste.</p>
        <div className="cuadros">
          <div><strong>3</strong><span>repasos para hoy</span></div>
          <div><strong>2</strong><span>convocatorias guardadas</span></div>
          <div><strong>80 %</strong><span>repasos a tiempo</span></div>
        </div>
        <p className="nota">Datos de ejemplo: esta práctica todavía no se conecta a una base de datos.</p>
      </main>
    </div>
  );
}
