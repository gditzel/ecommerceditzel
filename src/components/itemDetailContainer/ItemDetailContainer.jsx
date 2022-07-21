import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../items/ItemDetail";
import Spinner from "../spinner/Spinner";

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const { idProduct } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (idProduct) {
      setTimeout(() => {
        fetch("/products.json")
          .then((res) => res.json())
          .then((res) =>
            setItems(res.filter((item) => item.id === Number(idProduct)))
          )
          .finally(() => setLoading(false));
      }, 1000);
    }
  }, [idProduct]);

  return (
    <>
      <div className="text-center h-96 my-24">
        {loading ? <Spinner /> : <ItemDetail items={items} />}
      </div>
    </>
  );
};

export default ItemDetailContainer;
