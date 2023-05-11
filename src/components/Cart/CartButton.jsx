import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import CartIcon from '../../assets/CartIcon';

import CartContext from '../../store/cart-context';
import CartBadge from './CartBadge';

const CartButton = () => {
    const { openCart } = useContext(CartContext);

    return (
        <motion.button
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.9 }}
            className="relative hover:text-dark400 duration-300 focus:outline focus:outline-dark600 focus:outline-2 focus:outline-offset-2 focus:duration-0 focus:rounded-sm"
            onClick={openCart}
            aria-label="Open shopping cart"
        >
            <span>
                <CartIcon />
            </span>
            <CartBadge />
        </motion.button>
    );
};

export default CartButton;
