import React from "react";
import logo from '../../img/LOGO.png';
import './NavBar.css';
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {

    return (

        <nav className="navbar">

            <Link to="/" className="logo">
                <img className="logo__img" src={logo} alt="PetCity_logo" />
            </Link>

            <div className="navegacion">
                <ul>
                    <li>
                        <Link to="/" className="activo" aria-current="page" >Inicio</Link>
                    </li>
                    <li>
                        <Link to="/">Servicios</Link>
                    </li>
                    <li>
                        <Link to="/itemList">PetShop</Link>
                    </li>
                    <li>
                        <Link to="/">Ventajas</Link>
                    </li>
                    <li>
                        <Link to="/">Nosotros</Link>
                    </li>
                    <li>
                        <Link to="/">Contacto</Link>
                    </li>
                </ul>
            </div>

            <CartWidget />

        </nav>

    )

}

export default NavBar;