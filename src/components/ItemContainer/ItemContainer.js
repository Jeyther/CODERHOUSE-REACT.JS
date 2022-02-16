import React, { useState } from "react";
import './ItemContainer.css';

import img_comida from './../../img/comida_perro-1.jpg';
import img_cart from './../../img/cart.png';

const ItemContainer = (props) => {

    const [count, setCount] = useState(1);

    const handlerClicAdd = () => {

        if (count < props.stock) {

            setCount(count + 1);

        }


    }
    const handlerClicSubstract = () => {

        if (count > props.initial) {
            
            setCount(count - 1);
            
        }

    }

    return (

        <div class="elemento">

            <a href='index.html'>

                <img class="elemento__img" src={img_comida} alt="comida_perro" />

                <p id="id-articulo">1</p>

                <h4 class="elemento__titulo" id="nombre">Comida Perro 1</h4>

                <p class="elemento__descripcion">Esta es la comida de perro numero uno</p>

            </a>

            <div>
                <div class="elemento__cantidad">
                    <button id="menos" onClick={handlerClicSubstract}>-</button>
                    <input class="elemento__cantidad__contador" id="cantidad" type="number" placeholder="cantidad"
                        min="1" value={count} max={props.stock} />
                    <button id="mas" onClick={handlerClicAdd}>+</button>
                </div>
                <div>
                    <p class="elemento__precio" id="precio">300</p>
                    <p>$</p>
                </div>
            </div>

            <button class="elemento__boton" id="agregar">Agregar <img src={img_cart} alt='img_carrito' class="elemento__boton__cart" /> </button>

        </div>

    )

}

export default ItemContainer;
