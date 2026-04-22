import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState<any[]>([]);

  useEffect(() => {
    const productos = JSON.parse(
      localStorage.getItem("favoritos") || "[]"
    );
    setFavoritos(productos);
  }, []);

  return (
    <div className="favoritos">
      <h1>Favoritos</h1>

      {favoritos.length === 0 ? (
        <p>No hay favoritos</p>
      ) : (
        <div className="favoritos-grid">
          {favoritos.map((favorito: any) => (
            <div className="favorito-card" key={favorito.id}>
              <Link
                className="favorito-link"
                to={`/producto/${favorito.id}`}
              >
                <img
                  src={favorito.images[0]}
                  alt={favorito.title}
                />

                <h3>{favorito.title}</h3>
                <p>${favorito.price}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}