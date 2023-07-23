import React, { createContext, useState } from 'react';
import { PRODUCTS } from '../Products';

export const ShopContext = createContext();

const getDefaultCart = (initCount) => {
    let cart = {};

    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = initCount;
    }

    return cart;
}

export const ShopContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart(1));

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const item in cartItems) {
            if(cartItems[item] > 0) {
                let itemInfo = PRODUCTS.find((product) => product.id === Number(item));

                totalAmount += cartItems[item] * itemInfo.price;
            }
        }

        return totalAmount;
    }

    const addToCart = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] + 1 }));
    }

    const removeFromCart = (itemID) => {
        setCartItems((prev) => ({ ...prev, [itemID]: prev[itemID] - 1 }));
    }

    const updateCartItemCount = (newAmount, itemID) => {
        setCartItems((prev) => ({...prev, [itemID]: newAmount}))
    }

    const clearCart = () => {
        setCartItems(getDefaultCart(0));
    }

    const contextvalue = { cartItems, addToCart, removeFromCart, updateCartItemCount, getTotalCartAmount, clearCart };

    return (
        <ShopContext.Provider value={contextvalue}>
            { children }
        </ShopContext.Provider>
    );
}
