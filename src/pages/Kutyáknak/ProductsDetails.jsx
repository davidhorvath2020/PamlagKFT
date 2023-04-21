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

    const [count, setCount] = useState(1);

    const onQuantityChange = (value) => {
        setCount(event.target.value)
        // console.log(count)
    }





    const addCart = (products) => {
        console.log("here:", products.id, count)

        const newProduct = {
            ...products,
            count: count,
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
                oldState(index).count = count;
            }
            return [...oldState]
        })

        console.log(productsInCart)
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
                                        <select
                                            value={products.count}
                                            onChange={(event) => onQuantityChange(event.target.value)}
                                        >
                                            {[...Array(10).keys(),].
                                                map((number) => {
                                                    const num = number + 1;
                                                    return (
                                                        <option
                                                            value={num}
                                                            key={num}>
                                                            {num}
                                                        </option>
                                                    );
                                                })}
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

   //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // useEffect(() => {
    //     fetch(`http://localhost:3000/Products/${params.id}`)
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [params.id])