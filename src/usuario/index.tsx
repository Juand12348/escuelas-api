import { useEffect, useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./style.css";


export default function Usuario() {
  const [nombre, setNombre] = useState<string>("");
  const [fecha, setFecha] = useState<string>("");
  const [telefono, setTelefono] = useState<string>("");
  const [cargando, setCargando] = useState<boolean>(true);

  const uid = auth.currentUser?.uid;
  const navigate = useNavigate();

  useEffect(() => {
    const traerDatos = async (): Promise<void> => {
      if (!uid) {
        setCargando(false);
        return;
      }

      try {
        const docRef = doc(db, "usuarios", uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();

          setNombre(data.nombre ?? "");
          setFecha(data.fecha ?? "");
          setTelefono(data.telefono ?? "");
        } else {
          alert("Usuario no encontrado");
        }

      } catch (error) {
        console.error(error);
        alert("Error cargando datos");
      }

      setCargando(false);
    };

    traerDatos();

  }, [uid]);

  const actualizarDatos = async (): Promise<void> => {
    if (!uid) {
      alert("No hay usuario autenticado");
      return;
    }

    try {
      const docRef = doc(db, "usuarios", uid);

      await updateDoc(docRef, {
        nombre,
        fecha,
        telefono,
      });

      alert("Datos actualizados");

    } catch (error) {
      console.error(error);
      alert("Error al actualizar");
    }
  };

  if (cargando) {
    return (
      <div className="cargando">
        Cargando...
      </div>
    );
  }

  return (
  <div className="usuario-page">

    <div className="usuario-card">

      <h1 className="usuario-title">
        Perfil del Usuario
      </h1>

      <p className="usuario-subtitle">
        Administra tu información personal
      </p>

      <div className="usuario-form">

        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) =>
            setNombre(e.target.value)
          }
        />

        <input
          type="date"
          value={fecha}
          onChange={(e) =>
            setFecha(e.target.value)
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
          className="save-btn"
          onClick={
            actualizarDatos
          }
        >
          Guardar cambios
        </button>

        <button
          className="logout-btn"
          onClick={() =>
            navigate(
              "/logout"
            )
          }
        >
          Cerrar sesión
        </button>

      </div>

    </div>

  </div>
);
}