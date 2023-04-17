import React from "react";
import { Link } from "react-router-dom";


import db from "../../firebase"
import { useEffect, useState } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';

export default function Kutyaknak() {

    const [productData, setproductData] = useState([]);

    useEffect(
        () =>
            onSnapshot(collection(db, "Products"), (snapshot) => {
                setproductData(snapshot.docs.map(x => x.data()))
            }), []
    )

    return (
        <div className="Kutyaknak">

            <div>
                <h1>firestore teszt</h1>
                {productData.map(x => {
                    return (
                        <div>
                            <h2> {x.type}</h2>
                            <div>{x.description}</div>
                        </div>)
                })}
            </div>

            <Link to='..' className="BackButton">Vissza</Link>
            <div className="LinksContainer">
                <div className="container">
                    <div className="content">
                        <Link to='Hámok' state={{productData: productData }} >
                            <div className="content-overlay"></div>
                            <img src="../src/assets/Hámok/Hámok.png" className='content-image' />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Hámok</h3>
                                <p className="content-text">Mutast a termékeket</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="container">
                    <div className="content">
                        <Link to='Nyakörvek' state={{productData: productData }} >
                            <div className="content-overlay"></div>
                            <img src="../src/assets/Nyakörvek.png" className='content-image' />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Nyakörvek</h3>
                                <p className="content-text">Mutast a termékeket</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="container">
                    <div className="content">
                        <Link to='Pórázok' state={{productData: productData }} >
                            <div className="content-overlay"></div>
                            <img src="../src/assets/Pórázok.png" className='content-image' />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Pórázok</h3>
                                <p className="content-text">Mutast a termékeket</p>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
