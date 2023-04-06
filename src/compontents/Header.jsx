import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {

    const activeStyle = {
        fontWeight: "bold"
    }

    return (
        <header>
            <nav>
                <div className="nav--leftside">
                    <h1>Pamlag KFT</h1>
                    <img src="./src/assets/Logo.png" className="img--Logo"></img>
                </div>
                <div className="nav--rightside">
                    <NavLink
                        to='/'
                        className="nav--elements"
                        style={({ isActive }) => isActive ? activeStyle : null}>
                        Főoldal
                    </NavLink>
                    <NavLink
                        to='/Kutyáknak'
                        className="nav--elements"
                        style={({ isActive }) => isActive ? activeStyle : null}>
                        Kutyáknak
                    </NavLink>
                    <NavLink
                        to='/Macskáknak'
                        className='nav--elements'
                        style={({ isActive }) => isActive ? activeStyle : null}>
                        Macskáknak
                    </NavLink>
                    <div className='nav--elements'>IG</div>
                    <div className='nav--elements'>Face</div>
                </div>
            </nav>
        </header>
    )
}