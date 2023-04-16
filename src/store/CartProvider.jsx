import React, { useState } from "react";

import CartContext from "./cart-context";

const CartProvider = (props) => {
    const [isClicked, setIsClicked] = useState(false);

    const [items, setItems] = useState([]);

    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item;
    }, 0);

    const addItemToCartHandler = (item) => {
        setItems((prevState) => [...prevState, item]);
    };

    const removeItemFromCartHandler = () => {
        setItems([]);
    };

    const openCartHandler = () => {
        setIsClicked((prevState) => !prevState);
    };

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            setIsClicked(false);
        }
    });

    const cartContext = {
        isClicked,
        items: numberOfCartItems,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        openCart: openCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;
