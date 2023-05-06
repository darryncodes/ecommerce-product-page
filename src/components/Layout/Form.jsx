import React, { useContext, useState, useRef } from 'react';

import CartIcon from './../../assets/CartIcon';
import MinusIcon from './../../assets/MinusIcon';
import PlusIcon from './../../assets/PlusIcon';

import CartContext from '../../store/cart-context';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';

const Form = () => {
    const [counter, setCounter] = useState(0);
    const currentCount = useRef();

    const { addItem } = useContext(CartContext);

    const handleDecrement = () => {
        if (counter === 0) {
            return;
        }
        setCounter(counter - 1);
    };

    const handleIncrement = () => {
        setCounter(counter + 1);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const count = parseInt(currentCount.current.innerText);
        addItem(count);

        if (count === 0) {
            return;
        }
        toast.success('Added to cart!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        });
    };

    return (
        <div className="grid grid-cols-1 gap-y-4 md:gap-y-0 md:gap-x-4 md:grid-cols-3">
            <div className="bg-neutral200 text-dark400 grid grid-cols-3 place-items-center rounded-md py-3">
                <button
                    onClick={handleDecrement}
                    className="hover:opacity-70 duration-300"
                >
                    <MinusIcon />
                </button>
                <p ref={currentCount}>{counter}</p>
                <button
                    onClick={handleIncrement}
                    className="hover:opacity-70 duration-300"
                >
                    <PlusIcon />
                </button>
            </div>
            <motion.button
                whileHover={{ scale: 1.015 }}
                whileTap={{ scale: 0.985 }}
                onClick={handleSubmit}
                className="col-span-2 bg-accent400 text-neutral100 rounded-md flex justify-center gap-2 py-3 shadow-xl shadow-accent600 hover:opacity-70 duration-300"
            >
                <CartIcon />
                Add to cart
            </motion.button>
            <ToastContainer className=" md:hidden" />
        </div>
    );
};

export default Form;
