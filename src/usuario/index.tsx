import { useState, type ChangeEvent } from "react";
import "./style.css"

interface User {
  nombre: string;
  correo: string;
  edad: string;
  telefono: string;
  ciudad: string;
}


export default function Usuario(){
const [user, setUser] = useState<User>({
    nombre: "",
    correo: "",
    edad: "",
    telefono: "",
    ciudad: "",
  });

  const cambiarUsuario = (evento: any) => {
  setUser({
    ...user,
    [evento.target.name]: evento.target.value,
  });
};

  return (
  <div className="usuario-container">

    <h2>Configuración de Usuario</h2>

    <div className="usuario-form">

      <div className="usuario-field">
        <label>Nombre</label>
        <input
          type="text"
          name="nombre"
          value={user.nombre}
          onChange={cambiarUsuario}
          placeholder="Tu nombre"
        />
      </div>

      <div className="usuario-field">
        <label>Correo</label>
        <input
          type="email"
          name="correo"
          value={user.correo}
          onChange={cambiarUsuario}
          placeholder="correo@email.com"
        />
      </div>

      <div className="usuario-field">
        <label>Edad</label>
        <input
          type="number"
          name="edad"
          value={user.edad}
          onChange={cambiarUsuario}
          placeholder="18"
        />
      </div>

      <div className="usuario-field">
        <label>Teléfono</label>
        <input
          type="text"
          name="telefono"
          value={user.telefono}
          onChange={cambiarUsuario}
          placeholder="3001234567"
        />
      </div>

      <div className="usuario-field">
        <label>Ciudad</label>
        <input
          type="text"
          name="ciudad"
          value={user.ciudad}
          onChange={cambiarUsuario}
          placeholder="Bogotá"
        />
      </div>

    </div>

    <button>Guardar</button>

    <div className="usuario-preview">

      <h3>Vista previa</h3>

      <p>Nombre: {user.nombre}</p>
      <p>Correo: {user.correo}</p>
      <p>Edad: {user.edad}</p>
      <p>Teléfono: {user.telefono}</p>
      <p>Ciudad: {user.ciudad}</p>

    </div>

  </div>
);
}