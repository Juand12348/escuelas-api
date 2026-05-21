import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate
} from "react-router-dom";

import "./App.css";

import Home from "./home";
import Original from "./original";
import Favorito from "./favoritos";
import Informativa from "./informativa";
import Usuario from "./usuario";
import Producto from "./producto";

import Login from "./login";
import Registro from "./regsitro";
import Logout from "./logout";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <Router>

      <nav className="c-menu">

        <Link to="/">Home</Link>

        <Link to="/favoritos">
          Favoritos
        </Link>

        <Link to="/original">
          Original
        </Link>

        <Link to="/informativa">
          Informativa
        </Link>

        <Link to="/usuario">
          Usuario
        </Link>

      </nav>

      <Routes>

        {/* LOGIN POR DEFECTO */}
        <Route
          path="/"
          element={<Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/registro"
          element={<Registro />}
        />

        <Route
          path="/logout"
          element={<Logout />}
        />

        {/* PRIVADAS */}

        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/favoritos"
          element={
            <ProtectedRoute>
              <Favorito />
            </ProtectedRoute>
          }
        />

        <Route
          path="/original"
          element={
            <ProtectedRoute>
              <Original />
            </ProtectedRoute>
          }
        />

        <Route
          path="/informativa"
          element={
            <ProtectedRoute>
              <Informativa />
            </ProtectedRoute>
          }
        />

        <Route
          path="/usuario"
          element={
            <ProtectedRoute>
              <Usuario />
            </ProtectedRoute>
          }
        />

        <Route
          path="/producto/:id"
          element={
            <ProtectedRoute>
              <Producto />
            </ProtectedRoute>
          }
        />

      </Routes>

    </Router>
  );
}

export default App;