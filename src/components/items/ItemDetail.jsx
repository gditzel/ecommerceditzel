import React from "react";
import { ItemCount } from "../items/ItemCount";

const ItemDetail = ({ items }) => {
  const { name, price, image, desc, imageAlt } = items[0];
  const initialCount = 1;
  const stockCount = 5;

  function OnAdd(contador, actualizarContador) {
    if (stockCount !== 0) {
      alert(`Items agregados al carrito: ${contador}`);
      actualizarContador(initialCount);
    } else {
      alert(`Stock no disponible`);
    }
  }

  return (
    <>
      <div className="mx-36 flex gap-5 shadow-xl p-8">
        <div className="w-96">
          <img src={image} alt={imageAlt} />
        </div>
        <div className="grid">
          <div className="text-2xl">{name}</div>
          <div className="text-gray-400 text-xl">{desc}</div>
          <div className="flex justify-center gap-5 text-xl">
            <div>${price}</div>
          </div>
          <ItemCount
            stock={stockCount}
            initial={initialCount}
            onAdd={OnAdd}
          ></ItemCount>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
