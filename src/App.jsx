import React from "react";
import Grid from "./components/UI/Grid";
import Header from "./components/UI/Header";
import CartProvider from "./store/CartProvider";

function App() {
    return (
        <CartProvider>
            <div className="max-w-[68.75rem] mx-auto">
                <Header />
                <Grid />
            </div>
        </CartProvider>
    );
}

export default App;
