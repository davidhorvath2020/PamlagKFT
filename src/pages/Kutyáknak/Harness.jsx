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
                x.product.includes('Hámok')
            )
        })
        .map((x) => {
            const img = `/images/Hámok/${x.img}`
            return (
                <div className="LinksContainer" product={x.product} type={x.type} key={x.id}>
                    <div className="container2">
                        <div className="content2">
                            <Link
                                className="nav--elements"
                                to={`/Kutyáknak/Hámok/${x.id}`}
                                state={{ productData: data.productData }} >

                                <div className="content-overlay2" ></div>
                                <img src={img} className='content-image2' />
                                <div className="content-details2 fadeIn2-bottom2">
                                    <h3 className="content-title2">Hámok: {x.type}</h3>
                                    <p className="content-text2">Mutast a termékeket</p>
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
            <h1>Hámok</h1>
            <Link to='/Kutyáknak' className="BackButton">Vissza</Link>
            <div className="ElementContainer">
                {ProductsElements}
            </div >
        </div>
    )
}