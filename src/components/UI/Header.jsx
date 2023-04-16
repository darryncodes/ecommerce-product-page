import React from "react";
import Navigation from "../Layout/Navigation";

const Header = () => {
    return (
        <>
            <header className="py-8 mx-4 md:border-b-2 md:border-neutral-200 relative">
                <Navigation />
            </header>
        </>
    );
};

export default Header;
