import "./style.css";

export default function Informativa() {

  return (
    <div className="api-info">

      <h1>Ecommerce App</h1>
      <p>
        Esta aplicación consume la API pública de productos de
        EscuelaJS para simular el funcionamiento de un ecommerce real.
      </p>
      <img
        src="https://i.imgur.com/QkIa5tT.jpeg"
        alt="API productos"
        width="300"
      />
      <h2>API utilizada</h2>
      <p>
        Endpoint principal:
      </p>
      <code>
        https://api.escuelajs.co/api/v1/products
      </code>
      <h2>Información de los productos</h2>
      <ul>
        <li>
          ID del producto
        </li>
        <li>
          Nombre del producto
        </li>
        <li>
          Precio
        </li>
        <li>
          Descripción
        </li>
        <li>
          Imágenes
        </li>
        <li>
          Categoría
        </li>
      </ul>
      <h2>Funcionalidades de la aplicación</h2>
      <ul>
        <li>
          Home con listado de productos
        </li>
        <li>
          Vista individual del producto
        </li>
        <li>
          Sistema de favoritos
        </li>
        <li>
          Configuración de usuario
        </li>
        <li>
          Sección Original
        </li>
      </ul>
    </div>
  );
}