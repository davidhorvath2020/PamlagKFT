import React, { useState, useEffect } from "react";

export default function Card(props) {

    const [productsInCart, setProductsInCart] = useState(
        JSON.parse(localStorage.getItem("productsInCart")) || []);

    useEffect(() => {
        localStorage.setItem("productsInCart", JSON.stringify(productsInCart))
    }, [productsInCart])

    return (
        <div
            className="modal"
            style={{
                display: props.visibility ? 'block' : 'none'
            }}>
            <div className="shoppingCart">
                <button onClick={()=>props.setCartsVisibility(false)}>Close</button>
                <div className="shoppingCart--products">
                    {productsInCart.map(x => {
                        return (
                            <div key = {x.id}>
                                {/* <div> {x.product} </div> */}
                                <div> {x.type} </div>
                                <img src={`/images/${x.product}/${x.img}`} className="cart--img" />
                                amount: {x.count}
                            </div>
                        )
                    })}
                    Cart
                </div>
            </div>
        </div>
    )
}
