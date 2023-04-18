import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Termékek from "../../../data/Data";
import { useLocation } from "react-router-dom";


export default function Harness() {

    // import Nyakörvek from "../../../public/images/Nyakörvek/Nyakörvek.png"
    // import Hámok from "../../../public/images/Hámok/Hámok.png"
    // import Pórázok from "../../../public/images/Pórázok/Pórázok.png"

    const location = useLocation();
    const data = location.state;

    const ProductsElements = Termékek
        .filter((x) => {
            return (
                x.product.includes('Póráz')
            )
        })
        .map((x) => {
            const img = `../../../public/images/Pórázok/${x.img}`
            return (
                <div className="LinksContainer" product={x.product} type={x.type} key={x.id}>
                    <div className="container">
                        <div className="content">
                            {/* <div>id: {x.id}</div>
                            <div>product:{x.product} </div>
                            <div>type: {x.type}</div> */}
                            <Link
                                className="nav--elements"
                                to={`/Kutyáknak/Pórázok/${x.id}`}
                                state={{ productData: data.productData }} >
                                <div className="content-overlay" ></div>
                                <img src={img} className='content-image' />
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