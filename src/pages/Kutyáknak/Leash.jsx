import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Termékek from "../../../data/Data";


export default function Harness() {

    const ProductsElements = Termékek
        .filter((x) => {
            return (
                x.product.includes('Póráz')
            )
        })
        .map((x) => {
            return (
                <div className="LinksContainer" product={x.product} type={x.type} key={x.id}>
                    <div className="container">
                        <div className="content">
                            {/* <div>id: {x.id}</div>
                            <div>product:{x.product} </div>
                            <div>type: {x.type}</div> */}
                            <Link className="nav--elements" to={`/Kutyáknak/Pórázok/${x.id}`} >
                                <div className="content-overlay" ></div>
                                <img src={`../src/assets/Pórázok/${x.img}`} className='content-image' />
                                <div className="content-details fadeIn-bottom">
                                    <h3 className="content-title">Pórázok: {x.type}</h3>
                                    <p className="content-text">Mutast a termékeket</p>
                                </div>
                                {/* <img src="../src/assets/Hámok/Bőr.png"></img> */}
                                {/* {x.description} */}
                            </Link>
                        </div>
                    </div>
                </div >)
        })


    return (
        <div>
            <h1>Pórázok</h1>
            <Link to='/Kutyáknak' className="BackButton" >Vissza</Link>
            <div className="ElementContainer">
                {ProductsElements}
            </div >
        </div>
    )
}