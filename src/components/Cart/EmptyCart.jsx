import React from 'react';
import { motion } from 'framer-motion';

const EmptyCart = () => {
    const fadeIn = {
        hidden: {
            y: '0',
            opacity: 0,
        },
        visible: {
            y: '0',
            opacity: 1,
            transition: {
                duration: 0.005,
                type: 'spring',
                damping: 25,
                stiffness: 50,
            },
        },
        exit: {
            y: '0',
            opacity: 0,
        },
    };

    return (
        <motion.p
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="py-8 text-dark400 text-center"
        >
            Your cart is empty.
        </motion.p>
    );
};

export default EmptyCart;
