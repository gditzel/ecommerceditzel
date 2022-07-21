import { createContext, useContext, useState } from "react";

const CartContext = createContext([]);

export const useCartContext = () => {
  useContext(CartContext);
};

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (objProducto) => {
    setCartList([objProducto]);
  };

  return (
    <CartContext.Provider value={{ cartList, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
