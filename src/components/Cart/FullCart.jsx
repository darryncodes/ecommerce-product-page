import React, { useContext } from 'react';
import { motion } from 'framer-motion';

import CartContext from '../../store/cart-context';

import trainer from './../../assets/image-product-1-thumbnail.jpg';
import BinIcon from './../../assets/BinIcon';

const FullCart = () => {
    const { items } = useContext(CartContext);
    const { removeItem } = useContext(CartContext);

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
        <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="grid"
        >
            <div className="flex items-center gap-4 py-4">
                <img
                    src={trainer}
                    alt="Fall limited edition sneaker thumbnail"
                    className="rounded-md max-w-[3rem]"
                />
                <div>
                    <p>Fall Limited Edition Sneakers</p>
                    <p>
                        $125.00 x<span>{items}</span>{' '}
                        <span className="text-dark400 font-bold">
                            ${items * 125}.00
                        </span>
                    </p>
                </div>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={removeItem}
                    className="focus:outline focus:outline-dark600 focus:outline-2 focus:outline-offset-2 focus:duration-0 focus:rounded-sm"
                    aria-label="Remove items from shopping cart"
                >
                    <BinIcon />
                </motion.button>
            </div>
            <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.975 }}
                className="bg-accent400 text-neutral100 rounded-md py-3 focus:outline focus:outline-dark600 focus:outline-2 focus:duration-0 focus:rounded-md"
                aria-label="Go to checkout"
            >
                Checkout
            </motion.button>
        </motion.div>
    );
};

export default FullCart;
