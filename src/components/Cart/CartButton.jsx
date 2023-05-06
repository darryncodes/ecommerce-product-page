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
            className="relative hover:text-dark400 duration-300"
            onClick={openCart}
        >
            <span>
                <CartIcon />
            </span>
            <CartBadge />
        </motion.button>
    );
};

export default CartButton;
