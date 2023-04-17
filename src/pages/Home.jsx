import React from "react";
import { Link } from "react-router-dom";

import db from "../firebase"
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';

export default function Home() {

    const [productData, setproductData] = useState([]);
    console.log(productData)

    useEffect(
        () =>
            onSnapshot(collection(db, "Products"), (snapshot) => {
                setproductData(snapshot.docs.map(x => x.data()))
            }), []
    )

    return (
        <div className="Home">
            <h2>
                Kutyás gazdik számára
            </h2>
            <Link to='/Kutyáknak'>
                <img src="./src/assets/HomeBackground.webp"
                    className="img--Kutyáknak">
                </img>

            </Link>
            <h2>
                Macskás gazdik számára
            </h2>
            <Link to='/Macskáknak'>
                <img src="./src/assets/Home_Cat.jpeg"
                    className="img--Kutyáknak"></img>
            </Link>

            <h3>
                Nagy tetű kutyákra specializálódva
                Megbízható minőség
            </h3>
        </div>
    )
}
