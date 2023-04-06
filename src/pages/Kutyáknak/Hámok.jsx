import React from "react";
import { Link } from "react-router-dom";
import Termékek from "../../../data/Data";

export default function Harness() {

    const ProductsElements = Termékek
        // .filter((x) => {
        //     return (
        //         x.product.includes('Hámok')
        //     )
        // })
        .map((x) => {
            return (
                <div className="Hámok--Container" product={x.product} type={x.type} key={x.id} >
                    <div>id: {x.id}</div>
                    <div>product:{x.product} </div>
                    <div>type: {x.type}</div>
                    ----------------------
                    <Link className="nav--elements" to={`/Kutyáknak/Hámok/${x.id}`} >link to: <br/>{x.type}</Link>
                    <div>
                        
                        {/* {x.description} */}
                    </div>
                </div>)
        })

    return (
        <div>
            Hámok
            <Link to='/Kutyáknak'>Vissza</Link>
            <div className="ElementContainer">
                {ProductsElements}
            </div >
        </div>
    )
}