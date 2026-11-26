# BRÚJULA · Landing Page con React Router

Actividad práctica: SPA en React (Vite) con React Router.
Flujo: Landing Page → Vistas informativas → Login → Dashboard (sin autenticación).

## Rutas

| Ruta | Componente | Acceso desde |
| --- | --- | --- |
| `/` | `LandingPage` | Ruta inicial (raíz) |
| `/login` | `Login` | Barra de navegación (`<header>/<nav>`) de la Landing Page |
| `/quienes-somos` | `QuienesSomos` | Barra de navegación (`<header>/<nav>`) de la Landing Page |
| `/terminos` | `Terminos` | Pie de página (`<footer>`) de la Landing Page |
| `/condiciones` | `Condiciones` | Pie de página (`<footer>`) de la Landing Page |
| `/dashboard` | `Dashboard` | Al hacer clic en «Entrar al Dashboard» dentro de `Login` (`useNavigate`) |
| `*` | `NotFound` | Cualquier URL inexistente (Error 404) |

## Estructura

```
src/
├── pages/
│   ├── LandingPage.jsx
│   ├── Login.jsx
│   ├── Dashboard.jsx
│   ├── QuienesSomos.jsx
│   ├── Terminos.jsx
│   ├── Condiciones.jsx
│   └── NotFound.jsx
├── App.jsx      ← <Routes> y <Route>
└── main.jsx     ← <BrowserRouter>
```

## Correr

```
npm install
npm run dev
```
