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
        console.log('SIZE', size)
    }
    const onColorChange = (value) => {
        setColor(event.target.value)
        console.log(color)
    }

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
            }
            else if (found) {
                alert('Ezt a terméket már hozzáadtad a kosaradhoz!')
            }
            else {
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
                if (newProduct.size !== productsInCart[finalID].size) {
                    setProductsInCart(
                        [...productsInCart,
                            newProduct
                        ]
                    )
                }
                if (newProduct.color !== productsInCart[finalID].color) {
                    setProductsInCart(
                        [...productsInCart,
                            newProduct
                        ]
                    )
                }
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
                                    <h1>Pictures</h1>
                                    <img
                                        src={`/images/${products.product}/${products.img}`}
                                        className='ProductsDetails--image' />
                                </div>
                                <div className="ProductsDetails--RightSide">
                                    <div>Leírás: {products.description}</div>
                                    <h2>Méretek: S M L XL</h2>
                                    <h2>Színek: Black, Yellow, Red</h2>
                                    <h2>Ár: {products.price} Ft</h2>
                                    <div>
                                        <button onClick={() => addCart(products)}>Add</button>
                                    </div>
                                    <div>
                                        <h1>
                                            Color: yellow, blue, red, orange
                                        </h1>
                                        <select
                                            value={products.color}
                                            onChange={(event) => onColorChange(event.target.value)}
                                        >
                                            <option>
                                                Select a color
                                            </option>
                                            <option value={'red'}>
                                                red
                                            </option>
                                            <option value={'blue'}>
                                                blue
                                            </option>

                                        </select>
                                    </div>
                                    <div>
                                        <h1>
                                            Size: S M L XL
                                        </h1>
                                        <select
                                            value={products.size}
                                            onChange={(event) => onSizeChange(event.target.value)}
                                        >
                                            <option >
                                                Select a size
                                            </option>
                                            <option value={'s'}>
                                                S
                                            </option>
                                            <option value={'m'}>
                                                M
                                            </option>

                                        </select>
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