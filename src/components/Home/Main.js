import React from 'react';
// import './../../../scss/Main.scss';
import { Link } from "react-router-dom";
import fondo from './../../img/fondo.png';
import flecha from './../../img/flecha.png';

const Main = () => {

    return (

        <main className="main">

            <div className="main__texto">
                <h1 className="main__texto__titulo"><span className="pequeño">Lo Mejor</span><span className="separacionPalabras">para
                    tu mascota</span></h1>
                <p className="main__texto__subtitulo">Tenemos los mejores servicios veterinarios del pais al un paso de tu hogar</p>
                <Link className="main__boton" to='/itemList'>
                    <p className="main__boton__texto">Pet Shop</p>
                    <img src={flecha} alt="flecha" className="main__boton__flecha"/>
                </Link>
            </div>

            <img src={fondo} alt="flecha" className="main__imagen"/>

        </main>

    );

}

export default Main;