import React, { useRef, useState } from 'react';
import LightBoxModal from './LightBoxModal';

import trainer1 from './../../assets/image-product-1.jpg';
import trainer2 from './../../assets/image-product-2.jpg';
import trainer3 from './../../assets/image-product-3.jpg';
import trainer4 from './../../assets/image-product-4.jpg';

import PreviousIcon from './../../assets/PreviousIcon';
import NextIcon from './../../assets/NextIcon';

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

const LightBox = () => {
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

    const [openModal, setOpenModal] = useState(false);

    const showModal = () => {
        setOpenModal((prevState) => !prevState);
    };

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            setOpenModal(false);
        }
    });

    return (
        <div>
            <div className="mb-4 relative">
                <button
                    className="bg-neutral100 flex justify-center items-center w-10 h-10 rounded-full absolute top-1/2 transform -translate-y-1/2 left-4 md:hidden"
                    onClick={handlePreviousImage}
                >
                    <PreviousIcon />
                </button>
                <img
                    ref={currentImg}
                    src={trainer1}
                    alt=""
                    className="md:rounded-xl md:cursor-pointer"
                    onClick={showModal}
                />
                {openModal && <LightBoxModal close={showModal} />}
                <button
                    className="bg-neutral100 flex justify-center items-center w-10 h-10 rounded-full absolute top-1/2 transform -translate-y-1/2 right-4 md:hidden"
                    onClick={handleNextImage}
                >
                    <NextIcon />
                </button>
            </div>
            <div className="grid-cols-4 gap-4 hidden md:grid">
                <button
                    onClick={handleSwapImage}
                    className="rounded-xl focus:outline focus:outline-2 focus:outline-accent400 relative before:absolute before:inset-0 before:h-100 before:w-100 before:rounded-xl before:opacity-0 before:duration-300 before:bg-[#f5f5f565] before:hover:opacity-100"
                >
                    <img src={trainer1} alt="" className="rounded-xl" />
                </button>
                <button
                    onClick={handleSwapImage}
                    className="rounded-xl focus:outline focus:outline-2 focus:outline-accent400 relative before:absolute before:inset-0 before:h-100 before:w-100 before:rounded-xl before:opacity-0 before:duration-300 before:bg-[#f5f5f565] before:hover:opacity-100"
                >
                    <img src={trainer2} alt="" className="rounded-xl" />
                </button>
                <button
                    onClick={handleSwapImage}
                    className="rounded-xl focus:outline focus:outline-2 focus:outline-accent400 relative before:absolute before:inset-0 before:h-100 before:w-100 before:rounded-xl before:opacity-0 before:duration-300 before:bg-[#f5f5f565] before:hover:opacity-100"
                >
                    <img src={trainer3} alt="" className="rounded-xl" />
                </button>
                <button
                    onClick={handleSwapImage}
                    className="rounded-xl focus:outline focus:outline-2 focus:outline-accent400 relative before:absolute before:inset-0 before:h-100 before:w-100 before:rounded-xl before:opacity-0 before:duration-300 before:bg-[#f5f5f565] before:hover:opacity-100"
                >
                    <img src={trainer4} alt="" className="rounded-xl" />
                </button>
            </div>
        </div>
    );
};

export default LightBox;
