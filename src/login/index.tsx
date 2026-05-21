import { useEffect, useState } from "react";
import "./style.css";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";


import { auth } from "../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [correo, setCorreo] = useState<string>("");
  const [contrasena, setContrasena] =
    useState<string>("");

  const [loading, setLoading] =
    useState<boolean>(false);

  const navigate = useNavigate();

  // Si ya existe sesión → entrar directo
  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(auth, (user) => {
        if (user) {
          navigate("/home", {
            replace: true,
          });
        }
      });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogin = async (
    e: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    e.preventDefault();

    setLoading(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        correo,
        contrasena
      );

      navigate("/home", {
        replace: true,
      });

    } catch (error) {
      if (error instanceof Error) {
        alert(
          "Error al iniciar sesión: " +
            error.message
        );
      }
    }

    setLoading(false);
  };

  return (
  <div className="login-page">

    <div className="login-card">

      <h1 className="login-title">
        Iniciar Sesión
      </h1>

      <p className="login-subtitle">
        Accede para continuar en Ecommerce App
      </p>

      <form
        onSubmit={handleLogin}
        className="login-form"
      >

        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) =>
            setCorreo(
              e.target.value
            )
          }
          autoComplete="email"
          required
        />

        <input
          type="password"
          placeholder="Contraseña"
          value={contrasena}
          onChange={(e) =>
            setContrasena(
              e.target.value
            )
          }
          autoComplete="current-password"
          required
        />

        <button
          className="login-btn"
          type="submit"
          disabled={loading}
        >
          {
            loading
              ? "Ingresando..."
              : "Ingresar"
          }
        </button>

      </form>

      <button
        className="register-btn"
        onClick={() =>
          navigate("/registro")
        }
      >
        ¿No tienes cuenta? Regístrate
      </button>

    </div>

  </div>
);
}