import { ItemCount } from "../items/ItemCount";

const ItemListContainer = ({ saludo }) => {
  return (
    <>
      {saludo}
      <ItemCount stock="5" initial="1"></ItemCount>
    </>
  );
};

export default ItemListContainer;
