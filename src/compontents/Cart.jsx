import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle, AiOutlineDelete } from "react-icons/ai";

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
                        {
                            ...foundIndex,
                            counting: foundIndex.counting + 1
                        } :
                        x
                ))
        }
    }
    const Substract = (optionID) => {
        const foundIndex = productsInCart.find(x => x.optionID === optionID)
        if (foundIndex && foundIndex.counting > 1) {
            setProductsInCart(
                productsInCart.map((x) =>
                    x.optionID === optionID ?
                        { ...foundIndex, counting: foundIndex.counting - 1 } :
                        x
                ))
        }
    }

    const totalPrice = productsInCart.reduce(
        (accumulator, current) =>
            accumulator + current.price * current.counting, 0)

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
                <div className="shoppingCart--CloseDiv">
                    <AiOutlineCloseCircle
                        className="shoppingCart--CloseButton"
                        onClick={() => props.setCartsVisibility(false)}
                    />
                </div>
                {productsInCart == '' && <h1>A korarad még üres!</h1>}
                <div className="shoppingCart--products">
                    {productsInCart.map(x => {
                        return (
                            <div className="shoppingCart--product" key={x.optionID}>
                                <div className="cart--imgContainer">
                                    <img src={`/images/${x.product}/${x.img}`} className="cart--img" />
                                </div>
                                <div className="shoppingCart--details">
                                    <h2>{x.type}</h2>
                                    <h3 className="shoppingCart--size">Méret: {x.size}</h3>
                                    <h3 style={{ backgroundColor: `${x.color}` }}
                                        className="shoppingCart--color"
                                    ></h3>
                                </div>
                                <div className="shoppingCart--buttons">
                                    <div>
                                        <h3>{x.counting} db</h3>
                                    </div>
                                    <div className="shoppingCart--Amountbuttons">
                                        <div onClick={() => Add(x.optionID)}>+</div>
                                        <div onClick={() => Substract(x.optionID)}>-</div>
                                    </div>
                                    <div className="shoppingCart--Deletebuttons">
                                        <AiOutlineDelete
                                            className="shoppingCart--Deletebutton"
                                            onClick={() => RemoveFromCart(x.optionID)}
                                        />
                                    </div>
                                </div>
                                <div className="shoppingCart--price">
                                    <h3>{x.counting * x.price} Ft</h3>
                                </div>
                            </div>
                        )
                    })}
                    <div className="shoppingCart--TotalPrice">
                        <h3>Teljes fizetendő: {totalPrice} Ft </h3>
                        <button
                            className="shoppingCart--PayButton"
                            onClick={()=>alert('Az weboldalról vásárlás nem lehetséges!')}>
                            Fitezés
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}