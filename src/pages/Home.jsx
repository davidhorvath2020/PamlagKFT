import React from "react";
import { Link } from "react-router-dom";

export default function Home() {

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
