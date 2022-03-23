import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {

    return (

        <div id="container">
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top justify-content-md-center justify-content-start">
                <div className="container-fluid">

                    <Link className="navbar-brand" to="/">
                        <img className="header__logo " src="img/LOGO.png" alt="PetCity Logo" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between align-items-center w-100"
                        id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto text-md-center text-left ">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Servicios</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/itemList">PetShop</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Ventajas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Nosotros</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/">Contacto</Link>
                            </li>
                        </ul>
                        <ul className="nav navbar-nav flex-row justify-content-md-left justify-content-start flex-nowrap">
                            <li className="nav-item">
                                <CartWidget />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )

}

export default NavBar;