import React from "react";
import PC from "../../assets/pc.webp";

const ItemCard = (props) => {
  return (
    <div className="mx-auto my-5 w-80 grid gap-y-3 border-solid border-2 border-indigo-600 rounded p-5">
      <img src={PC} alt="Pc gamer" />
      <div className="text-4xl">PC Gamer</div>
      <div className="text-base">{props.text}</div>
      <div>${props.precio}</div>
      <div className="flex justify-around items-center mx-auto my-auto h-7 border-dashed border-2 border-indigo-600 w-36">
        <button onClick={props.disminuir}>-</button>
        <div>{props.contador}</div>
        <button onClick={props.aumentar}>+</button>
      </div>
      <div>{props.total}</div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-56 mx-auto"
        onClick={props.add}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCard;
