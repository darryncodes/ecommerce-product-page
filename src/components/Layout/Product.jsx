import React from "react";

const Product = () => {
    return (
        <div className="p-8 max-w-lg mx-auto md:max-w-none">
            <div className="flex flex-col gap-6 mb-4 text-neutral600">
                <p className="text-accent400 text-sm font-bold uppercase">
                    Sneaker Company
                </p>
                <h2 className="text-dark400 font-bold text-3xl">
                    Fall Limited Edition Sneakers
                </h2>
                <p>
                    These low-profile sneakers are your perfect casual wear
                    companion. Featuring a durable rubber outer sole, they’ll
                    withstand everything the weather can offer.
                </p>
                <div className="flex items-center justify-between md:flex-col md:items-start">
                    <p className="font-bold flex items-center">
                        <span className="text-dark400 text-3xl mr-4">
                            $125.00
                        </span>
                        <span className="text-accent400 bg-accent100 px-2 rounded-md">
                            50%
                        </span>
                    </p>
                    <p className="text-neutral400 line-through">$250.00</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
