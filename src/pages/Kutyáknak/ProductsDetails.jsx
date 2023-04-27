import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase"

export default function ProductsDetails() {

    const params = useParams()
    const [products, setProducts] = useState(null)

    const location = useLocation();
    const data = location.state;

    async function getDataFunction(id) {
        const docRef = doc(db, "Products", id)
        const dataSnapshot = await getDoc(docRef)
        return {
            ...dataSnapshot.data(),
            id: dataSnapshot.id
        }
    }

    const [productsInCart, setProductsInCart] = useState(
        JSON.parse(localStorage.getItem("productsInCart")) || []);

    useEffect(() => {
        localStorage.setItem("productsInCart", JSON.stringify(productsInCart))
    }, [productsInCart])

    const [size, setSize] = useState('')
    const [color, setColor] = useState('')

    const onSizeChange = (value) => {
        setSize(event.target.value)
    }
    const onColorChange = (value) => {
        setColor(event.target.value)
    }

    const [add, setAdd] = useState(false)

    const addCart = (products) => {

        const found = productsInCart.some(el => el.id === products.id)

        if (size === '' || color === '') { alert('Adj meg méret és szín opciót!') }
        else {
            if (!found) {
                const newProduct = {
                    ...products,
                    counting: 1,
                    size: size,
                    color: color,
                    optionID: Math.floor(Math.random() * 1000) + 1
                };

                setProductsInCart([
                    ...productsInCart,
                    newProduct,
                ]);

                setProductsInCart((oldState) => {
                    const index = productsInCart.findIndex(x => {
                        x.id === products.id
                    })
                    if (index !== -1) {
                        oldState(index).counting = count;
                    }
                    return [...oldState]
                })
            } else if (found) {
                const newProduct = {
                    ...products,
                    counting: 1,
                    size: size,
                    color: color,
                    optionID: Math.floor(Math.random() * 1000) + 1
                };

                const filteredProducts = productsInCart.filter(x => x.id === newProduct.id)

                function findElementFunc(element) {
                    return element.size === newProduct.size && element.color === newProduct.color;
                }
                const findElement = filteredProducts.find(findElementFunc)
                const boolFind = findElement === undefined

                if (boolFind) {
                    setProductsInCart([
                        ...productsInCart,
                        newProduct,
                    ])
                } else if (!boolFind) { alert('Már benne van') }
            }
        }
        setSize("")
        setColor("")
    }

    useEffect(() => {
        getDataFunction(params.id)
            .then(data => setProducts(data))
    }, [params.id])

    return (
        <div>
            <Link to='..' className="BackButton" >Vissza</Link>
            <section>
                {products ?
                    (
                        <div className="ProductsDetails--Container">
                            <div className="ProductsDetails--Main">
                                <div className="ProductsDetails--LeftSide">
                                    <h2>{products.product}</h2>
                                    <img
                                        src={`/images/${products.product}/${products.img}`}
                                        className='ProductsDetails--image' />
                                </div>
                                <div className="ProductsDetails--RightSide">
                                    <h3>{products.type}</h3>
                                    <div>{products.description}</div>
                                    <div>
                                        <h1>
                                            Válaszható színek
                                        </h1>
                                        <select
                                            value={color}
                                            onChange={(event) => onColorChange(event.target.value)}
                                        >
                                            <option>
                                                Válassz egy színt
                                            </option>
                                            <option value={'piros'}>
                                                piros
                                            </option>
                                            <option value={'kék'}>
                                                kék
                                            </option>
                                            <option value={'citromsárga'}>
                                                citromsárga
                                            </option>
                                            <option value={'narancssárga'}>
                                                narancssárga
                                            </option>

                                        </select>
                                    </div>
                                    <div>
                                        <h1>
                                            Választható méretek
                                        </h1>
                                        <select
                                            value={size}
                                            onChange={(event) => onSizeChange(event.target.value)}
                                        >
                                            <option >
                                                Válassz egy méretet
                                            </option>
                                            <option value={'s'}>
                                                S
                                            </option>
                                            <option value={'m'}>
                                                M
                                            </option>
                                            <option value={'l'}>
                                                L
                                            </option>
                                            <option value={'xl'}>
                                                XL
                                            </option>
                                        </select>
                                    </div>
                                    <h2>Ár: {products.price} Ft</h2>
                                    <div>
                                        <button onClick={() => addCart(products)}>Add</button>
                                    </div>
                                </div>
                            </div>
                            15000.-ft feletti vásárlás esetén ingyenes házhoz szállítás
                        </div>
                    ) :
                    <h2>Loading</h2>
                }
            </section>
        </div>
    )
}












/*
else if (found) {
                console.log('Found')
                const foundIndex = productsInCart.find(x => x.id === products.id)
                const index = (x) => x.id === foundIndex.id
                const finalID = productsInCart.findIndex(index)
                const newProduct = {
                    ...products,
                    counting: 1,
                    size: size,
                    color: color,
                    optionID: Math.floor(Math.random() * 1000) + 1
                };
                console.log(finalID)
                if (
                    (newProduct.size !== productsInCart[finalID].size
                        || newProduct.color !== productsInCart[finalID].color)
                ) {
                    setProductsInCart(
                        [...productsInCart,
                            newProduct
                        ]
                    )
                } else if (
                    (newProduct.size !== productsInCart[finalID].size
                        && newProduct.color !== productsInCart[finalID].color)) {
                    setProductsInCart(
                        [...productsInCart,
                            newProduct
                        ]
                    )
                }
                else { alert('Ezt már hozzáadtad!') }

                // if (newProduct.color !== productsInCart[finalID].color) {
                //     setProductsInCart(
                //         [...productsInCart,
                //             newProduct
                //         ]
                //     )

            }
*/