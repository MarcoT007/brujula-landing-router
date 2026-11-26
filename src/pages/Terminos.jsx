// Términos de uso (ruta "/terminos").
import { Link } from "react-router";

export default function Terminos() {
  return (
    <div className="pagina texto">
      <Link to="/" className="volver">← Volver al inicio</Link>
      <h1>Términos de uso</h1>
      <ol>
        <li>BRÚJULA es un proyecto escolar gratuito para estudiantes de bachillerato.</li>
        <li>Úsala para estudiar y para informarte. No compartas tu cuenta con otras personas.</li>
        <li>Las fechas de becas y admisión las revisa un docente, pero confírmalas siempre en la fuente oficial.</li>
        <li>No publiques contenido ofensivo ni datos personales de otras personas.</li>
      </ol>
    </div>
  );
}
