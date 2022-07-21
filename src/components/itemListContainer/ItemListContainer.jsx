import { useEffect, useState } from "react";
import ItemList from "../items/ItemList";
import Spinner from "../spinner/Spinner";

const ItemListContainer = ({ saludo }) => {
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

  return (
    <>
      <div className="text-center mt-10">
        {loading ? <Spinner /> : <ItemList items={items} />}
      </div>
    </>
  );
};

export default ItemListContainer;
