import { useEffect, useState } from "react";
import "./style.css";

export default function BotonFavorito({ producto }: any) {
  const [esFavorito, setEsFavorito] = useState(false);

  useEffect(() => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");

    const existe = favoritos.find(
      (item: any) => item.id === producto.id
    );

    setEsFavorito(!!existe);
  }, [producto.id]);

  const manejarFavorito = () => {
    const favoritos = JSON.parse(localStorage.getItem("favoritos") || "[]");

    const existe = favoritos.find(
      (item: any) => item.id === producto.id
    );

    let nuevosFavoritos = [];

    if (existe) {
      nuevosFavoritos = favoritos.filter(
        (item: any) => item.id !== producto.id
      );
      setEsFavorito(false);
    } else {
      nuevosFavoritos = [...favoritos, producto];
      setEsFavorito(true);
    }

    localStorage.setItem("favoritos", JSON.stringify(nuevosFavoritos));
  };

  return (
    <button
      onClick={manejarFavorito}
      className={`btn-favorito ${esFavorito ? "activo" : ""}`}
    >
      {esFavorito ? "❤️" : "🤍"}
    </button>
  );
}