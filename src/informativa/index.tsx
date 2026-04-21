import "./style.css"

export default function Informativa(){

return (
    <div className="api-info">
      <h2>📦 API de Productos</h2>

      <p>
        Esta aplicación consume la API pública de{" "}
        <strong>EscuelaJS Fake Store API</strong>, utilizada para simular un
        ecommerce real.
      </p>

      <h3>🔗 Endpoint principal</h3>
      <code>https://api.escuelajs.co/api/v1/products</code>

      <h3>📁 Estructura de un producto</h3>
      <ul>
        <li><strong>id:</strong> identificador único</li>
        <li><strong>title:</strong> nombre del producto</li>
        <li><strong>price:</strong> precio</li>
        <li><strong>description:</strong> descripción</li>
        <li><strong>images:</strong> arreglo de imágenes</li>
        <li><strong>category:</strong> objeto con nombre y slug</li>
      </ul>

      <h3>🏷️ Categorías disponibles</h3>
      <ul>
        <li>clothes</li>
        <li>electronics</li>
        <li>furniture</li>
        <li>shoes</li>
        <li>miscellaneous</li>
      </ul>

      <h3>⚙️ Funcionalidades implementadas</h3>
      <ul>
        <li>✔️ Listado de productos</li>
        <li>✔️ Filtro por categoría</li>
        <li>✔️ Búsqueda por nombre y descripción</li>
        <li>✔️ Vista de detalle por producto</li>
      </ul>
    </div>
  );

}