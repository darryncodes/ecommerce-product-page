import React from "react";

const CartContext = React.createContext({
    addItem: (item) => {},
    removeItem: (item) => {},
    openCart: () => {},
});

export default CartContext;
