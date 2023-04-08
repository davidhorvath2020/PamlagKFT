import React from "react";
import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
// http://localhost:3000/Products
export default function ProductsDetails() {

    const params = useParams()
    const [products, setProducts] = useState(null)

    useEffect(() => {
        fetch(`http://localhost:3000/Products/${params.id}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [params.id])

    console.log(params)

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
                                        src={`../../src/assets/${products.product}/${products.img}`}
                                        className='ProductsDetails--image' />
                                </div>
                                <div className="ProductsDetails--RightSide">
                                    <div>Leírás: {products.description}</div>
                                    <h2>Méretek: S M L XL</h2>
                                    <h2>Színek: Black, Yellow, Red</h2>
                                    <h2>Ár: {products.price} Ft</h2>
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