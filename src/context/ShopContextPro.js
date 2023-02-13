import React, { createContext, useState } from "react";
import { PRODUCTS } from "../Products";

const ShopContext = createContext();

const getDefaultCart = () => {
  let cart = {};
  for (let i = 1; i <= PRODUCTS.length; i++) {
    cart[i] = 0;
  }
  return cart;
};

const ShopContextPro = (props) => {
  const [cartItems, setcartItems] = useState(getDefaultCart());

  let itemId;
  const addToCart = () => {
    setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = () => {
    setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const contextValue = { cartItems, addToCart, removeFromCart };
  console.log(cartItems);

  return (
    <div>
      <ShopContext.Provider value={contextValue}>
        {props.children}
      </ShopContext.Provider>
    </div>
  );
};

export default ShopContextPro;
