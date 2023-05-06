import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import CartContext from '../../store/cart-context';

const CartBadge = () => {
    const { items } = useContext(CartContext);

    if (items === 0) {
        return;
    }

    return (
        <motion.span
            animate={{ scale: 1 }}
            initial={{ scale: 0 }}
            className="bg-accent400 text-xs text-neutral100 rounded-full px-[.3rem] absolute -top-2"
        >
            {items}
        </motion.span>
    );
};

export default CartBadge;
