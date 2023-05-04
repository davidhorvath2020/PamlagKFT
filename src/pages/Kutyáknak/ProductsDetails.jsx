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
    const [isAddedVisible, setIsAddedVisible] = useState(false);

    const handleButtonClick = () => {
        setIsAddedVisible(true);
        setTimeout(() => {
            setIsAddedVisible(false);
        }, 1500);
    }

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
                handleButtonClick();
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
                    handleButtonClick()
                } else if (!boolFind) { alert('Ezt a terméket már hozzáadtad a kosárhoz!') }
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
            <section>
                {isAddedVisible
                    &&
                    <div className="AddedAlertContainer">
                        <div className="AddedAlert">Házzadva a kosaradhoz!</div>
                    </div>}
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
                                            <option
                                                value={'red'}
                                            >
                                                piros
                                            </option>
                                            <option
                                                value={'blue'}>
                                                kék
                                            </option>
                                            <option
                                                value={'yellow'}>
                                                sárga
                                            </option>
                                            <option
                                                value={'orange'}>
                                                narancs
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
                                            <option value={'S'}>
                                                S
                                            </option>
                                            <option value={'M'}>
                                                M
                                            </option>
                                            <option value={'L'}>
                                                L
                                            </option>
                                            <option value={'XL'}>
                                                XL
                                            </option>
                                        </select>
                                    </div>
                                    <h2>Ár: {products.price} Ft</h2>
                                    <div>
                                        <button
                                            className="ProductsDetails--RightSideAddButton"
                                            onClick={() => addCart(products)}>
                                            Hozzáad
                                        </button>
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