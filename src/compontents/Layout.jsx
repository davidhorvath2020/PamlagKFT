import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useState } from 'react';
import Cart from "./Cart";


export default function Layout() {

    const [cartsVisibility, setCartsVisibility] = useState(false);
   
    return (
        <div className="site--wrapper">
            <Header
                handleCart={() => setCartsVisibility(prevCartsVisibility => !prevCartsVisibility)}
            />
            <main>
                <Cart
                    visibility={cartsVisibility}
                    setCartsVisibility = {setCartsVisibility}
                    cartsVisibility = {cartsVisibility}
                />
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}