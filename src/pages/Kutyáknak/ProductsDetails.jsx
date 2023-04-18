import React from "react";
import { useParams, Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import db from "../../firebase"

// http://localhost:3000/Products
export default function ProductsDetails() {

    // import Nyakörvek from "../../../public/images/Nyakörvek/Nyakörvek.png"
    // import Hámok from "../../../public/images/Hámok/Hámok.png"
    // import Pórázok from "../../../public/images/Pórázok/Pórázok.png"

    const params = useParams()
    const [products, setProducts] = useState(null)

    const location = useLocation();
    const data = location.state;


    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    // useEffect(() => {
    //     fetch(`http://localhost:3000/Products/${params.id}`)
    //         .then(res => res.json())
    //         .then(data => setProducts(data))
    // }, [params.id])


    async function getDataFunction(id) {
        const docRef = doc(db, "Products", id)
        const dataSnapshot = await getDoc(docRef)
        return {
            ...dataSnapshot.data(),
            id: dataSnapshot.id
        }
    }

    useEffect(() => {
        getDataFunction(params.id)
            .then(x => setProducts(x))
    }, [params.id])

    return (
        <div>
            <Link to='..' className="BackButton" >Vissza</Link>
            {data.productData.map(x => {
                return (
                    <div>
                        <h2> {x.type}</h2>
                        <div>{x.description}</div>
                    </div>)
            })}
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