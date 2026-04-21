import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

interface ProductsOptions {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  images: string[];
  category: {
    id: number;
    name: string;
    slug: string;
  };
}

type FiltroTipo =
  | "clothes"
  | "electronics"
  | "furniture"
  | "shoes"
  | "miscellaneous";

export default function Home() {
  const [products, setProducts] = useState<ProductsOptions[]>([]);
  const [filtro, setFiltro] = useState<FiltroTipo | undefined>();
  const [busqueda, setBusqueda] = useState("");

  const filtros: FiltroTipo[] = [
    "clothes",
    "electronics",
    "furniture",
    "shoes",
    "miscellaneous",
  ];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.escuelajs.co/api/v1/products"
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.log("Error cargando datos: ", error);
      }
    };

    fetchData();
  }, []);

  const productsFiltrados = products.filter((product) => {
    const texto = busqueda.toLowerCase();

    const coincideBusqueda =
      texto === "" ||
      product.title.toLowerCase().includes(texto) ||
      product.description.toLowerCase().includes(texto);

    const coincideCategoria =
      !filtro || product.category?.slug === filtro;

    return coincideBusqueda && coincideCategoria;
  });

  return (
    <div>
      <div className="filtros">
        {filtros.map((type) => (
          <button
            key={type}
            onClick={() =>
              setFiltro(filtro === type ? undefined : type)
            }
            className={filtro === type ? "habilitado" : ""}
          >
            {type}
          </button>
        ))}
      </div>

      <input
        type="text"
        placeholder="Buscar..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />

      <h2>Productos</h2>

      {productsFiltrados.map((product) => (
  <Link
    to={`/producto/${product.id}`}
    key={product.id}
    className="card-link"
  >
    <div className="card">
      <img
        src={
          product.images?.length
            ? product.images[0]
            : "https://via.placeholder.com/150"
        }
        alt={product.title}
      />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
    </div>
  </Link>
))}
    </div>
  );
}