import { ItemCount } from "../items/ItemCount";
import { useEffect, useState } from "react";
import ItemList from "../items/ItemList";
import Spinner from "../spinner/Spinner";

const ItemListContainer = ({ saludo }) => {
  const initialCount = 1;
  const stockCount = 5;

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      fetch("/products.json")
        .then((res) => res.json())
        .then((res) => setItems(res))
        .finally(() => setLoading(false));
    }, 1000);
  }, []);

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
      {saludo}
      <ItemCount
        stock={stockCount}
        initial={initialCount}
        onAdd={OnAdd}
      ></ItemCount>
      <div className="text-center mt-10">
        {loading ? <Spinner /> : <ItemList items={items} />}
      </div>
    </>
  );
};

export default ItemListContainer;
