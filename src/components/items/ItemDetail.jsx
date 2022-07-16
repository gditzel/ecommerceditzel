import React from "react";

const ItemDetail = ({ items }) => {
  const { name, price, stock, image, desc, imageAlt } = items[0];

  console.log(items);
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
            <div>Stock: {stock}</div>
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mx-auto h-14">
            Agregar al carrito
          </button>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
