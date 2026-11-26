// Login (ruta "/login"). Navegación programática con useNavigate:
// al enviar el formulario, el código decide a dónde ir (aquí, al Dashboard).
import { Link, useNavigate } from "react-router";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault(); // Evita que el navegador recargue la página al enviar el formulario
    // Aún no autenticamos: redirigimos directo al Dashboard
    navigate("/dashboard");
  };

  return (
    <div className="pagina centrada">
      <form className="tarjeta" onSubmit={handleSubmit}>
        <h1>Iniciar Sesión</h1>
        <label>
          Correo electrónico
          <input type="email" placeholder="tu@correo.com" />
        </label>
        <label>
          Contraseña
          <input type="password" placeholder="••••••••" />
        </label>
        <button type="submit" className="boton">Entrar al Dashboard</button>
        <Link to="/" className="volver">← Volver al inicio</Link>
      </form>
    </div>
  );
}
