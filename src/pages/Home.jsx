import React from "react";
import { Link } from "react-router-dom";
import HomeBackground from "/images/HomeBackground.webp"
import Home_Cat from "/images/Home_Cat.jpeg"

import db from "../firebase"
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';

export default function Home() {

    const [productData, setproductData] = useState([]);

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
                <img src={HomeBackground}
                    className="img--Kutyáknak">
                </img>

            </Link>
            <h2>
                Macskás gazdik számára
            </h2>
            <Link to='/Macskáknak'>
                <img src={Home_Cat}
                    className="img--Kutyáknak"></img>
            </Link>

            <h3>
                Nagy tetű kutyákra specializálódva
                Megbízható minőség
            </h3>
        </div>
    )
}
