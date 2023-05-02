import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsCartFill, BsCart, BsInstagram, BsFacebook } from "react-icons/bs";

export default function Header(props) {

    const [showNavbar, setShowNavbar] = useState(false)

    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }

    return (
        <header>
            <nav>
                <div className="nav--leftside">
                    <img src={"/images/LOGO.png"} className="img--Logo"></img>
                    <h1>Pamlag KFT</h1>
                </div>
                <div className="menu-icon" onClick={handleShowNavbar}>
                    <GiHamburgerMenu />
                </div>
                <div className={`nav-elements ${showNavbar && 'active'}`}>
                    <ul>
                        <li>
                            <NavLink to='/'>
                                Főoldal
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Kutyáknak'>
                                Kutyáknak
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/Macskáknak'>
                                Macskáknak
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='https://www.instagram.com/horvathdawid/'>
                                <BsInstagram
                                    className='nav-elements--Icon'
                                />
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='https://www.facebook.com/profile.php?id=100003499556587'
                                className='nav-elements--Icon'>
                                <BsFacebook
                                    className='nav-elements--Icon'
                                />
                            </NavLink>
                        </li>
                        <li>
                            <BsCart
                                className='nav-elements--Icon'
                                onClick={props.handleCart}
                            />
                        </li>
                    </ul>
                    {/* <BsCartFill/> */}
                </div>
            </nav>
        </header>
    )
}