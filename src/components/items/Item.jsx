import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const { name, price, stock, image, desc, imageAlt } = item;
  return (
    <div className="m-5 w-80 grid gap-5 shadow-xl p-8">
      <img src={image} alt={imageAlt} />
      <div className="text-xl ">{name}</div>
      <div className="text-gray-400">{desc}</div>
      <div className="flex justify-evenly text-xl">
        <div>${price}</div>
        <div>Stock: {stock}</div>
      </div>
      <Link to={`/Producto/${item.id}`}>
        <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded w-40 mx-auto">
          Ver Detalle 
        </button>
      </Link>
    </div>
  );
};

export default Item;
