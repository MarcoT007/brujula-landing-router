// Quiénes Somos (ruta "/quienes-somos").
import { Link } from "react-router";

export default function QuienesSomos() {
  return (
    <div className="pagina texto">
      <Link to="/" className="volver">← Volver al inicio</Link>
      <h1>Quiénes Somos</h1>
      <p>
        Somos estudiantes del CBTis 122 de Chihuahua. Creamos BRÚJULA porque vimos que muchos compañeros
        estudian la noche antes del examen y se enteran tarde de las fechas para entrar a la universidad.
      </p>
      <h2>Equipo</h2>
      <ul>
        <li>Marco Leonardo Talavera Sánchez · Desarrollo</li>
        {/* Agrega aquí a los demás integrantes del equipo */}
      </ul>
      <h2>Nuestra meta</h2>
      <p>Que cada alumno estudie con técnicas que sí funcionan y no pierda ninguna fecha importante.</p>
    </div>
  );
}
