// import { ItemCount } from "../items/ItemCount";
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
    }, 2000);
  }, []);

  return (
    <>
      {saludo}
      {/* <ItemCount stock="5" initial="1"></ItemCount> */}
      <div className="text-center mt-10">
        {loading ? <Spinner /> : <ItemList items={items} />}
      </div>
    </>
  );
};

export default ItemListContainer;
