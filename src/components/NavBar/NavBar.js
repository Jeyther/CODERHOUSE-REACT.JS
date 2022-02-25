import React from "react";
import logo from '../../img/LOGO.png';
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {

    return (

        <nav className="navbar">

            <a className="logo" href="/">
                <img className="logo__img" src={logo} alt="PetCity_logo" />
            </a>

            <div className="navegacion">
                <ul>
                    <li>
                        <a className="activo" aria-current="page" href="/">Inicio</a>
                    </li>
                    <li>
                        <a href="#S2">Servicios</a>
                    </li>
                    <li>
                        <a href="/itemList">PetShop</a>
                    </li>
                    <li>
                        <a href="/itemList/5">Ventajas</a>
                    </li>
                    <li>
                        <a href="#S5">Nosotros</a>
                    </li>
                    <li>
                        <a href="#S7">Contacto</a>
                    </li>
                </ul>
            </div>

            <CartWidget />

        </nav>

    )

}

export default NavBar;