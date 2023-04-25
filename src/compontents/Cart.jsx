import React, { useState, useEffect } from "react";

export default function Card(props) {

    const [productsInCart, setProductsInCart] = useState(
        JSON.parse(localStorage.getItem("productsInCart")) || []);

    useEffect(() => {   //to keep the cart in sync
        setProductsInCart(JSON.parse(localStorage.getItem("productsInCart")))
    }, [props.cartsVisibility])

    useEffect(() => {
        localStorage.setItem("productsInCart", JSON.stringify(productsInCart))
    }, [productsInCart])

    const Add = (optionID) => {
        const foundIndex = productsInCart.find(x => x.optionID === optionID)
        if (foundIndex) {
            setProductsInCart(
                productsInCart.map((x) =>
                    x.optionID === optionID ?
                        { ...foundIndex, counting: foundIndex.counting + 1 } :
                        x
                ))
        }
    }
    const Substract = (optionID) => {
        const foundIndex = productsInCart.find(x => x.optionID === optionID)

        console.log(foundIndex.counting)

        if (foundIndex && foundIndex.counting > 1) {
            setProductsInCart(
                productsInCart.map((x) =>
                    x.optionID === optionID ?
                        { ...foundIndex, counting: foundIndex.counting - 1 } :
                        x
                ))
        }
    }

    const RemoveFromCart = (optionID) => {
        const foundIndex = productsInCart.find(x => x.optionID === optionID)
        setProductsInCart(
            productsInCart.filter((x) => x.optionID !== optionID)
        )
    }

    return (
        <div
            className="modal"
            style={{
                display: props.visibility ? 'block' : 'none'
            }}>
            <div className="shoppingCart">
                <button onClick={() => props.setCartsVisibility(false)}>Close</button>
                <div className="shoppingCart--products">
                    {productsInCart.map(x => {
                        return (
                            <div key={x.optionID}>
                                <div> {x.type} </div>
                                <img src={`/images/${x.product}/${x.img}`} className="cart--img" />
                                <div>{x.size}</div>
                                <div>{x.color}</div>
                                amount: {x.counting}
                                <h2>{x.optionID}</h2>
                                <button onClick={() => Add(x.optionID)}>+</button>
                                <button onClick={() => Substract(x.optionID)}>-</button>
                                <button onClick={() => RemoveFromCart(x.optionID)}>Delete</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}