import React, { useContext } from "react";

import CartContext from "../../store/cart-context";
import EmptyCart from "./EmptyCart";
import FullCart from "./FullCart";

const Cart = () => {
    const { isClicked } = useContext(CartContext);
    const { items } = useContext(CartContext);

    return (
        <div
            className={`bg-neutral100 max-w-[20rem] min-w-[18rem] p-4 text-sm rounded-md shadow-2xl absolute top-24 left-1/2 transform -translate-x-1/2 md:right-0 md:left-[unset] md:-translate-x-0 z-[9] sm:min-w-[20rem] ${
                isClicked ? null : "hidden"
            }`}
        >
            <div className="border-b-2 md:border-neutral-200 py-4">
                <h3 className="text-dark400 font-bold">Cart</h3>
            </div>
            {items === 0 ? <EmptyCart /> : <FullCart />}
        </div>
    );
};

export default Cart;
