import React, { useState } from "react";

import CartIcon from "./../../assets/CartIcon";
import MenuIcon from "./../../assets/MenuIcon";
import CloseIcon from "./../../assets/CloseIcon";

import logo from "./../../assets/logo.svg";
import profile from "./../../assets/image-avatar.png";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen((prevState) => !prevState);
    };
    return (
        <nav className="flex items-center justify-between">
            <div className="text-dark400 font-bold fixed top-0 left-0 md:hidden bg-slate-300 h-[100%]">
                <ul
                    className={`${
                        isOpen ? "flex" : "hidden"
                    } flex-col gap-4 pt-20 pl-4 pr-24`}
                >
                    <li>
                        <a href="">Collections</a>
                    </li>
                    <li>
                        <a href="">Men</a>
                    </li>
                    <li>
                        <a href="">Women</a>
                    </li>
                    <li>
                        <a href="">About</a>
                    </li>
                    <li>
                        <a href="">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-4">
                <button onClick={handleClick} className="md:hidden absolute">
                    {isOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
                <img src={logo} alt="Sneakers logo" className="pl-6 md:pl-0" />
                <ul className="items-center gap-4 hidden md:flex">
                    <li>
                        <a href="" className="hover:text-dark400">
                            Collections
                        </a>
                    </li>
                    <li>
                        <a href="" className="hover:text-dark400">
                            Men
                        </a>
                    </li>
                    <li>
                        <a href="" className="hover:text-dark400">
                            Women
                        </a>
                    </li>
                    <li>
                        <a href="" className="hover:text-dark400">
                            About
                        </a>
                    </li>
                    <li>
                        <a href="" className="hover:text-dark400">
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            <div className="flex items-center gap-4">
                <button>
                    <CartIcon />
                </button>
                <img
                    src={profile}
                    alt="User image"
                    className=" max-w-[2.5rem]"
                />
            </div>
        </nav>
    );
};

export default Navigation;
