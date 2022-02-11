import React from "react";
import logo from '../../img/LOGO.png';
import './NavBar.css';
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {

    return (

        <nav class="navbar">

            <a class="logo" href="index.html">
                <img class="logo__img" src={logo} alt="PetCity_logo" />
            </a>

            <div class="navegacion">
                <ul>
                    <li>
                        <a class="activo" aria-current="page" href="index.html">Inicio</a>
                    </li>
                    <li>
                        <a href="#S2">Servicios</a>
                    </li>
                    <li>
                        <a href="#S3">PetShop</a>
                    </li>
                    <li>
                        <a href="#S4">Ventajas</a>
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