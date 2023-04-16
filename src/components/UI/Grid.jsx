import React from "react";
import LightBox from "../Layout/LightBox";
import Product from "../Layout/Product";

const Grid = () => {
    return (
        <main className="mb-8 grid grid-cols-1 md:grid-cols-2 md:mb-0 md:gap-16 md:py-24 md:mx-4 md:place-items-center">
            <LightBox />
            <Product />
        </main>
    );
};

export default Grid;
