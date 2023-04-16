import React, { useContext } from "react";

import CartContext from "../../store/cart-context";

const CartBadge = () => {
    const { items } = useContext(CartContext);

    if (items === 0) {
        return;
    }

    return (
        <span className="bg-accent400 text-xs text-neutral100 rounded-full px-[.3rem] absolute -top-2">
            {items}
        </span>
    );
};

export default CartBadge;
