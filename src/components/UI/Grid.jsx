import React from "react";
import LightBox from "../Layout/Lightbox";

const Grid = () => {
    return (
        <main className="mb-8 grid grid-cols-1 md:grid-cols-2 md:mb-0 md:gap-16 md:py-24 md:mx-4 md:place-items-center">
            <LightBox />
        </main>
    );
};

export default Grid;
