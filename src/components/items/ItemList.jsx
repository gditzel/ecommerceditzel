import React from "react";
import Item from "./Item";

const ItemList = ({ items }) => {
  return (
    <div className="flex justify-center flex-wrap"
    >
      {items.map((item) => (
        <Item item={item} key={item.id}/>
      ))}
    </div>
  );
};

export default ItemList;
