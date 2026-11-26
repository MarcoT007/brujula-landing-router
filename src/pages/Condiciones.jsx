// Condiciones del servicio (ruta "/condiciones").
import { Link } from "react-router";

export default function Condiciones() {
  return (
    <div className="pagina texto">
      <Link to="/" className="volver">← Volver al inicio</Link>
      <h1>Condiciones del servicio</h1>
      <ul>
        <li><strong>Costo:</strong> el servicio es gratuito y nunca se cobrará a los alumnos.</li>
        <li><strong>Disponibilidad:</strong> es un prototipo escolar; puede tener interrupciones o cambios.</li>
        <li><strong>Tus datos:</strong> nunca se venden. Puedes borrar tu cuenta cuando quieras.</li>
        <li><strong>Asistente de IA:</strong> puede equivocarse; no sustituye a tus docentes.</li>
      </ul>
    </div>
  );
}
