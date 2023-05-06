import React, { useContext, useState, useRef } from 'react';

import CartIcon from './../../assets/CartIcon';
import MinusIcon from './../../assets/MinusIcon';
import PlusIcon from './../../assets/PlusIcon';

import CartContext from '../../store/cart-context';

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
    };

    return (
        <div className="grid grid-cols-1 gap-y-4 md:gap-y-0 md:gap-x-4 md:grid-cols-3">
            <div className="bg-neutral200 text-dark400 grid grid-cols-3 place-items-center rounded-md py-3 hover:opacity-70">
                <button onClick={handleDecrement}>
                    <MinusIcon />
                </button>
                <p ref={currentCount}>{counter}</p>
                <button onClick={handleIncrement}>
                    <PlusIcon />
                </button>
            </div>
            <button
                onClick={handleSubmit}
                className="col-span-2 bg-accent400 text-neutral100 rounded-md flex justify-center gap-2 py-3 shadow-xl shadow-accent600 hover:opacity-70"
            >
                <CartIcon />
                Add to cart
            </button>
        </div>
    );
};

export default Form;
