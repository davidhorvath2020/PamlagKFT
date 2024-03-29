import React from "react";
import { Link } from "react-router-dom";

import Hámok from "/images/Hámok/Hámok.png"
import Nyakörvek from "/images/Nyakörvek/Nyakörvek.png"
import Pórázok from "/images/Pórázok/Pórázok.png"

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
            <div className="Kutyaknak--LinksContainer">
                <div className="container">
                    <div className="content">
                        <Link to='Hámok' state={{ productData: productData }} >
                            <div className="content-overlay"></div>
                            <img src={Hámok} className='content-image' />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Hámok</h3>
                                <p className="content-text">Mutast a termékeket</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="container">
                    <div className="content">
                        <Link to='Nyakörvek' state={{ productData: productData }} >
                            <div className="content-overlay"></div>
                            <img src={Nyakörvek} className='content-image' />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Nyakörvek</h3>
                                <p className="content-text">Mutast a termékeket</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="container">
                    <div className="content">
                        <Link to='Pórázok' state={{ productData: productData }} >
                            <div className="content-overlay"></div>
                            <img src={Pórázok} className='content-image' />
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
