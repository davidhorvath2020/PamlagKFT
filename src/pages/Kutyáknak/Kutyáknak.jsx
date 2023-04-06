import React from "react";
import { Link } from "react-router-dom";

export default function Kutyaknak() {
    return (
        <div className="Kutyaknak">
            <Link to='..'>Vissza</Link>
            <div className="LinksContainer">
                <div className="container">
                    <div className="content">
                        <Link to='Hámok' >
                            <div className="content-overlay"></div>
                            <img src="../src/assets/Hámok.png" className='content-image' />
                            <div className="content-details fadeIn-bottom">
                                <h3 className="content-title">Hámok</h3>
                                <p className="content-text">Mutast a termékeket</p>
                            </div>
                        </Link>
                    </div>
                </div>

                <div className="container">
                    <div className="content">
                        <Link to='Nyakörvek' >
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
                        <Link to='Pórázok' >
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
