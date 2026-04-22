import { useState } from "react";
import "./style.css";

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
  <div className="original-container">

    <h2>Producto</h2>

    <p className={`original-price ${descuento ? "descuento" : ""}`}>
      Precio: {descuento ? "$85 (con descuento)" : "$100"}
    </p>

    <div className="original-game">

      <p>Adivina el número (1-5)</p>

      <div className="original-buttons">
        {[1, 2, 3, 4, 5].map((n) => (
          <button key={n} onClick={() => intentar(n)}>
            {n}
          </button>
        ))}
      </div>

      <p className="original-message">{mensaje}</p>

      <button className="original-restart" onClick={reiniciar}>
        Reiniciar juego
      </button>

    </div>

  </div>
);
}