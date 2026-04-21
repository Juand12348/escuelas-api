import { useState } from "react";

export default function Original() {
  const [numeroSecreto, setNumeroSecreto] = useState(
    Math.floor(Math.random() * 5) + 1
  );
  const [mensaje, setMensaje] = useState("");
  const [descuento, setDescuento] = useState(false);

  const intentar = (num: number) => {
    if (num === numeroSecreto) {
      setMensaje("¡Ganaste 15% OFF!");
      setDescuento(true);
    } else {
      setMensaje("No fue, intenta otra vez");
    }
  };

  const reiniciar = () => {
    setNumeroSecreto(Math.floor(Math.random() * 5) + 1);
    setMensaje("");
    setDescuento(false);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: 20 }}>
      <h2>Producto</h2>
      <p>Precio: {descuento ? "$85 (con descuento)" : "$100"}</p>

      <p>🎮 Adivina el número (1-5)</p>

      <div>
        {[1, 2, 3, 4, 5].map((n) => (
          <button key={n} onClick={() => intentar(n)}>
            {n}
          </button>
        ))}
      </div>

      <p>{mensaje}</p>

      <button onClick={reiniciar}>Reiniciar juego</button>
    </div>
  );
}