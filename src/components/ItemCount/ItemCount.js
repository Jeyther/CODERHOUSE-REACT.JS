import React, { useState } from "react";
import img_cart from './../../img/cart.png';
import "./ItemCount.css";

const ItemCount = (props) => {

    const [cantidad, setCantidad] = useState(props.initial);

    const handlerClickAdd = () => {

        if (cantidad < props.stock) {

            setCantidad(cantidad + 1);

        }


    }
    const handlerClickSub = () => {

        if (cantidad > props.initial) {

            setCantidad(cantidad - 1);

        }

    }

    return (

        <div className="itemCount">

            <div className="producto__contenedor__datos__cantidad">

                <button id="menos" onClick={handlerClickSub}>-</button>

                <label className="producto__contenedor__datos__cantidad__contador">{cantidad}</label>

                <button id="mas" onClick={handlerClickAdd}>+</button>

            </div>

            <button className="producto__contenedor__datos__boton" onClick={() => props.addHandlerClick(cantidad)}>Agregar <img src={img_cart} className="producto__contenedor__datos__boton__cart" alt="img_Cart" /> </button>

        </div>
    )


}

export default ItemCount;