import { useState } from "react";

export function ItemCount({ stock, initial, onAdd }) {
  const [contador, actualizarContador] = useState(initial);

  const HayStock = () => {
    return <p className="fs-8 fw-light">{stock} unidades disponibles</p>;
  };

  const NoHayStock = () => {
    return <p className="fs-8 fw-light">Stock no disponible</p>;
  };

  const DisponibilidadStock = () => {
    if (parseInt(stock) !== 0) {
      return <HayStock />;
    }
    return <NoHayStock />;
  };

  const Aumentar = () => {
    if (stock > contador) {
      actualizarContador(contador + 1);
    }
  };

  const Disminuir = () => {
    if (initial < contador) {
      actualizarContador(contador - 1);
    }
  };

  return (
    <>
      {<DisponibilidadStock />}
      <div className="flex justify-around items-center mx-auto my-auto h-7 border-dashed border-2 border-indigo-600 w-36">
        <button onClick={Disminuir}>-</button>
        <div>{contador}</div>
        <button onClick={Aumentar}>+</button>
      </div>
      <button
        onClick={() => onAdd(contador, actualizarContador)}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-56 mx-auto"
      >
        Agregar al carrito
      </button>
    </>
  );
}
