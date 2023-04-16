import React, { useContext } from "react";

import CartContext from "../../store/cart-context";

import trainer from "./../../assets/image-product-1-thumbnail.jpg";
import BinIcon from "./../../assets/BinIcon";

const FullCart = () => {
    const { items } = useContext(CartContext);
    const { removeItem } = useContext(CartContext);

    return (
        <div className="grid">
            <div className="flex items-center gap-4 py-4">
                <img
                    src={trainer}
                    alt="Fall limited edition sneaker thumbnail"
                    className="rounded-md max-w-[3rem]"
                />
                <div>
                    <p>Fall Limited Edition Sneakers</p>
                    <p>
                        $125.00 x<span>{items}</span>{" "}
                        <span className="text-dark400 font-bold">
                            ${items * 125}.00
                        </span>
                    </p>
                </div>
                <button onClick={removeItem}>
                    <BinIcon />
                </button>
            </div>
            <button className="bg-accent400 text-neutral100 rounded-md py-3">
                Checkout
            </button>
        </div>
    );
};

export default FullCart;
