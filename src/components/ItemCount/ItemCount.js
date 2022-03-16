import React, { useState } from "react";
import img_cart from './../../img/cart.png';
import "./ItemCount.css";

const ItemCount = (props) => {

    const [cantidad, setCantidad] = useState(1);


    const handlerClicAdd = () => {

        if (cantidad < props.stock) {

            setCantidad(cantidad + 1);

        }


    }
    const handlerClicSubstract = () => {

        if (cantidad > props.initial) {

            setCantidad(cantidad - 1);

        }

    }

    return (

        <div className="itemCount">

            <div className="producto__contenedor__datos__cantidad">

                <button id="menos" onClick={handlerClicSubstract}>-</button>

                <input className="producto__contenedor__datos__cantidad__contador" id="cantidad" type="number" placeholder="cantidad"
                    min="1" value={cantidad} max={props.stock} />

                <button id="mas" onClick={handlerClicAdd}>+</button>

            </div>


                <button className="producto__contenedor__datos__boton" id="agregar" onClick={() => props.addHandlerClick(cantidad)}>Agregar <img src={img_cart} className="producto__contenedor__datos__boton__cart" alt="img_Cart" /> </button>


        </div>
    )


}

export default ItemCount;