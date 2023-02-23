import { createContext, useEffect, useState } from "react";
import { PRODUCTS } from "../products";


export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
      cart[i] = 0;
    }
    return cart;
  };

// defining states and everything related to logic
export const ShopContextProvider = (props) => { 
  const [cartItems, setCartItems] =useState(getDefaultCart());
  
  const getTotalCartAmount = () => {
let totalAmount = 0;

Object.keys (cartItems).forEach(item =>  {
  console.log(cartItems)
  if (cartItems[item] > 0) {
      let itemInfo = PRODUCTS.find((product) => Number(product.id) === Number(item));

    


      totalAmount += cartItems[item] * itemInfo.price;
  }

} )


  return totalAmount;
};


const addToCart = (itemId) => {
    setCartItems({ ...cartItems, [itemId]: cartItems[itemId] + 1 });
  };

  const removeFromCart = (itemId) => {
    setCartItems({ ...cartItems, [itemId]: cartItems[itemId] - 1 });
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems({ ...cartItems, [itemId]: newAmount });
  };

  const checkout = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    cartItems,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    checkout,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};