import { useEffect, useState } from "react";
import "./style.css";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

import {
  doc,
  setDoc,
} from "firebase/firestore";

import {
  auth,
  db,
} from "../firebase/firebaseConfig";

import {
  useNavigate,
} from "react-router-dom";

export default function Registro() {
  const [nombre, setNombre] =
    useState<string>("");

  const [correo, setCorreo] =
    useState<string>("");

  const [contrasena, setContrasena] =
    useState<string>("");

  const [fecha, setFecha] =
    useState<string>("");

  const [telefono, setTelefono] =
    useState<string>("");

  const [loading, setLoading] =
    useState<boolean>(false);

  const navigate =
    useNavigate();

  // Si ya hay sesión → Home
  useEffect(() => {
    const unsubscribe =
      onAuthStateChanged(
        auth,
        (user) => {
          if (user) {
            navigate(
              "/home",
              {
                replace: true,
              }
            );
          }
        }
      );

    return () =>
      unsubscribe();

  }, [navigate]);

  const handleRegistro =
    async (
      e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {

      e.preventDefault();

      setLoading(true);

      try {
        const userCredential =
          await createUserWithEmailAndPassword(
            auth,
            correo,
            contrasena
          );

        const user =
          userCredential.user;

        await setDoc(
          doc(
            db,
            "usuarios",
            user.uid
          ),
          {
            uid:
              user.uid,

            nombre,

            correo,

            fecha,

            telefono,

            ganados: 0,

            perdidos: 0,
          }
        );

        alert(
          "Usuario registrado correctamente"
        );

        navigate(
          "/home",
          {
            replace: true,
          }
        );

      } catch (error) {

        if (
          error instanceof Error
        ) {
          alert(
            "Error al registrarse: " +
            error.message
          );
        }

      }

      setLoading(false);
    };

  return (
  <div className="register-page">

    <div className="register-card">

      <h1 className="register-title">
        Crear Cuenta
      </h1>

      <p className="register-subtitle">
        Regístrate para comenzar a explorar productos
      </p>

      <form
        className="register-form"
        onSubmit={handleRegistro}
      >

        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) =>
            setNombre(e.target.value)
          }
          required
        />

        <input
          type="email"
          placeholder="Correo electrónico"
          value={correo}
          onChange={(e) =>
            setCorreo(e.target.value)
          }
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
          required
        />

        <input
          type="date"
          value={fecha}
          onChange={(e) =>
            setFecha(
              e.target.value
            )
          }
        />

        <input
          type="tel"
          placeholder="Teléfono"
          value={telefono}
          onChange={(e) =>
            setTelefono(
              e.target.value
            )
          }
        />

        <button
          className="register-btn"
          type="submit"
          disabled={loading}
        >
          {
            loading
              ? "Registrando..."
              : "Crear Cuenta"
          }
        </button>

      </form>

      <button
        className="login-link"
        onClick={() =>
          navigate("/login")
        }
      >
        ¿Ya tienes cuenta?
        Inicia sesión
      </button>

    </div>

  </div>
);
}