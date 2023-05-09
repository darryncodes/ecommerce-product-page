import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

import trainer1 from './../../assets/image-product-1.jpg';
import trainer2 from './../../assets/image-product-2.jpg';
import trainer3 from './../../assets/image-product-3.jpg';
import trainer4 from './../../assets/image-product-4.jpg';

import PreviousIcon from './../../assets/PreviousIcon';
import NextIcon from './../../assets/NextIcon';
import CloseIconOrange from './../../assets/CloseIconOrange';

const images = [
    {
        img: trainer1,
    },
    {
        img: trainer2,
    },
    {
        img: trainer3,
    },
    {
        img: trainer4,
    },
];

const Backdrop = () => {
    return (
        <div className="fixed w-100 h-100 top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,0.7)] z-[1] hidden md:block"></div>
    );
};

const LightBoxModal = (props) => {
    let currentItem = 0;

    const currentImg = useRef();

    const handleSwapImage = (e) => {
        currentImg.current.src = e.target.firstChild.src;
    };

    const handlePreviousImage = () => {
        currentItem--;
        if (currentItem < 0) {
            currentItem = images.length - 1;
        }

        currentImg.current.src = images[currentItem].img;
    };

    const handleNextImage = () => {
        currentItem++;
        if (currentItem > images.length - 1) {
            currentItem = 0;
        }

        currentImg.current.src = images[currentItem].img;
    };

    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop />,
                document.getElementById('backdrop')
            )}
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-w-md z-[2] hidden md:block">
                <button onClick={props.close} className="ml-[27rem] mb-2">
                    <CloseIconOrange />
                </button>
                <div className="mb-4 relative">
                    <button
                        className="bg-neutral100 flex justify-center items-center w-10 h-10 rounded-full absolute top-1/2 transform -translate-y-1/2 left-[-20px]"
                        onClick={handlePreviousImage}
                    >
                        <PreviousIcon />
                    </button>
                    <img
                        ref={currentImg}
                        src={trainer1}
                        alt=""
                        className="md:rounded-xl"
                    />
                    <button
                        className="bg-neutral100 flex justify-center items-center w-10 h-10 rounded-full absolute top-1/2 transform -translate-y-1/2 right-[-20px]"
                        onClick={handleNextImage}
                    >
                        <NextIcon />
                    </button>
                </div>
                <div className="grid-cols-4 gap-4 hidden md:grid">
                    <button
                        onClick={handleSwapImage}
                        className="rounded-xl focus:outline focus:outline-2 focus:outline-accent400 focus:bg-[#f5f5f565] relative before:absolute before:inset-0 before:h-100 before:w-100 before:rounded-xl before:opacity-0 before:duration-300 before:bg-[#f5f5f565] before:hover:opacity-100 before:focus:opacity-90"
                    >
                        <img src={trainer1} alt="" className="rounded-xl" />
                        <div className=""></div>
                    </button>
                    <button
                        onClick={handleSwapImage}
                        className="rounded-xl focus:outline focus:outline-2 focus:outline-accent400 relative before:absolute before:inset-0 before:h-100 before:w-100 before:rounded-xl before:opacity-0 before:duration-300 before:bg-[#f5f5f565] before:hover:opacity-100 before:focus:opacity-90"
                    >
                        <img
                            src={trainer2}
                            alt=""
                            className="rounded-xl duration-300"
                        />
                    </button>
                    <button
                        onClick={handleSwapImage}
                        className="rounded-xl focus:outline focus:outline-2 focus:outline-accent400 relative before:absolute before:inset-0 before:h-100 before:w-100 before:rounded-xl before:opacity-0 before:duration-300 before:bg-[#f5f5f565] before:hover:opacity-100 before:focus:opacity-90"
                    >
                        <img
                            src={trainer3}
                            alt=""
                            className="rounded-xl duration-300"
                        />
                    </button>
                    <button
                        onClick={handleSwapImage}
                        className="rounded-xl focus:outline focus:outline-2 focus:outline-accent400 relative before:absolute before:inset-0 before:h-100 before:w-100 before:rounded-xl before:opacity-0 before:duration-300 before:bg-[#f5f5f565] before:hover:opacity-100 before:focus:opacity-90"
                    >
                        <img src={trainer4} alt="" className="rounded-xl" />
                    </button>
                </div>
            </div>
        </>
    );
};

export default LightBoxModal;
