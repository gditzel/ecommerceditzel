import { useState } from "react";
import ItemCard from "../items/ItemCard";

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

  const Total = (param) => {
    let total = param * contador;
    console.log(total);
    return `El total es: $${total}`;
  };

  return (
    <>
      <ItemCard
        text={<DisponibilidadStock />}
        precio="150000"
        total={Total(150000)}
        disminuir={Disminuir}
        contador={contador}
        aumentar={Aumentar}
        add={() => onAdd(contador, actualizarContador)}
      ></ItemCard>
    </>
  );
}
