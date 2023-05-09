import React, { useState } from 'react';

import MenuIcon from './../../assets/MenuIcon';
import CloseIcon from './../../assets/CloseIcon';

import { navLinks } from './../../constants/constants';

import logo from './../../assets/logo.svg';
import profile from './../../assets/image-avatar.png';
import CartButton from '../Cart/CartButton';
import Cart from '../Cart/Cart';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((prevState) => !prevState);
    };

    const mobileNav = navLinks.map((nav) => (
        <li key={nav.id}>
            <a href="#">{nav.title}</a>
        </li>
    ));

    const desktopNav = navLinks.map((nav) => (
        <li key={nav.id}>
            <a
                href="#"
                className="hover:text-dark400 hover:border-b-4 hover:border-accent400 hover:pb-[2.5rem] duration-300"
            >
                {nav.title}
            </a>
        </li>
    ));

    return (
        <nav className="flex items-center justify-between">
            <div className="text-dark400 font-bold fixed top-0 left-0 md:hidden h-full z-10">
                <div
                    className={`${
                        isOpen
                            ? 'fixed w-full h-full inset-0 bg-[rgba(0,0,0,0.7)] -z-10'
                            : 'hidden'
                    }`}
                ></div>
                <ul
                    className={`${
                        isOpen ? 'flex' : 'hidden'
                    } flex-col gap-4 pt-20 pl-4 pr-24 bg-neutral100 h-full`}
                >
                    {mobileNav}
                </ul>
            </div>
            <div className="flex items-center gap-4">
                <button
                    onClick={handleClick}
                    className="md:hidden absolute z-10"
                >
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
                <img src={logo} alt="Sneakers logo" className="pl-6 md:pl-0" />
                <ul className="items-center gap-4 hidden md:flex">
                    {desktopNav}
                </ul>
            </div>
            <div className="flex items-center gap-4">
                <Cart />
                <CartButton />
                <img
                    src={profile}
                    alt="User image"
                    className="max-w-[2.5rem] rounded-full hover:outline hover:outline-2 hover:outline-accent400 cursor-pointer duration-75"
                />
            </div>
        </nav>
    );
};

export default Navigation;
