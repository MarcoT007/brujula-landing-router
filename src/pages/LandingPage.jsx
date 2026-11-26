// Landing Page (ruta "/"). Navegación declarativa con <Link>: cambia la URL sin recargar la página.
// Nunca usamos <a href="..."> para rutas internas, porque <a> sí recarga todo el documento.
import { Link } from "react-router";

export default function LandingPage() {
  return (
    <div className="pagina">
      <header className="cabecera">
        <Link to="/" className="marca">▲ BRÚJULA</Link>
        <nav>
          <Link to="/quienes-somos">Quiénes Somos</Link>
          <Link to="/login" className="boton">Iniciar Sesión</Link>
        </nav>
      </header>

      <main className="hero">
        <p className="etiqueta">CBTis 122 · Chihuahua</p>
        <h1>Estudia con método.<br /><span>No pierdas tu camino.</span></h1>
        <p>
          BRÚJULA reúne en un solo lugar guías de estudio con técnicas que sí funcionan,
          las fechas de becas y admisión revisadas por docentes, y un asistente para tus dudas.
        </p>
        <Link to="/login" className="boton grande">Empezar</Link>
      </main>

      <footer className="pie">
        <span>© 2026 BRÚJULA · Proyecto escolar</span>
        <nav>
          <Link to="/terminos">Términos</Link>
          <Link to="/condiciones">Condiciones</Link>
        </nav>
      </footer>
    </div>
  );
}
