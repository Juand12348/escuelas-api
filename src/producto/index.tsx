// Producto.tsx

import { useParams } from "react-router-dom";
import "./style.css";
import { useEffect, useState } from "react";
import  BotonFavorito  from "../favoritos/BotonFavorito";

interface ProductData {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  images: string[];
}

export default function Producto() {
  const { id } = useParams<{ id: string }>();

  const [data, setData] = useState<ProductData | null>(null);

  const [favoritos, setFavoritos] = useState<any[]>([]);

  useEffect(() => {

    const favoritosGuardados = localStorage.getItem(
      "favoritos"
    );

    if (favoritosGuardados) {
      setFavoritos(JSON.parse(favoritosGuardados));
    }

  }, []);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.escuelajs.co/api/v1/products/${id}`
        );

        const data = await res.json();

        setData(data);
      } catch (error) {
        console.error("Error cargando datos: ", error);
      }
    };

    fetchData();
  }, [id]);
  console.log(favoritos);

  if (!data) return <p>Cargando...</p>;
  console.log("favoritos render", favoritos);

  return (
    <>
      <h2>Producto</h2>

      <div>
        <h3>{data.id}</h3>
        <h4>{data.title}</h4>
        <p>${data.price}</p>
        <p>{data.description}</p>

        <img
          src={
            data.images?.length
              ? data.images[0]
              : "https://via.placeholder.com/150"
          }
          alt={data.title}
        />

        <BotonFavorito
          producto={data}
          favoritos={favoritos}
          setFavoritos={setFavoritos}
        />
      </div>

      
    </>
  );
}