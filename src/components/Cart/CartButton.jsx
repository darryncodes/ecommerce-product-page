import React, { useContext } from 'react';

import CartIcon from '../../assets/CartIcon';

import CartContext from '../../store/cart-context';
import CartBadge from './CartBadge';

const CartButton = () => {
    const { openCart } = useContext(CartContext);

    return (
        <button className="relative hover:text-dark400" onClick={openCart}>
            <span>
                <CartIcon />
            </span>
            <CartBadge />
        </button>
    );
};

export default CartButton;
