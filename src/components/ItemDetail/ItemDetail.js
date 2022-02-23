import React, { useEffect, useState } from "react";
import './ItemDetail.css'

import img_cart from './../../img/cart.png';


const ItemDetail = (props) => {

    const [count, setCount] = useState(1);

    let item = props.producto;

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

        <div className="producto__contenedor" >

            <img className="producto__contenedor__img" src={item.img} alt={item.nombre} />

            <div className="producto__contenedor__datos" >

                <h1 className="producto__contenedor__datos__titulo" id='nombre'> {item.nombre}</h1>

                <p className='id-producto'>{item.id}</p>

                <div>

                    <p className="producto__contenedor__datos__descripcion"> {item.descripcion}</p>

                    <div>

                        <div className="producto__contenedor__datos__cantidad">
                            <button id="menos" onClick={handlerClicSubstract}>-</button>
                            <input className="producto__contenedor__datos__cantidad__contador" id="cantidad" type="number" placeholder="cantidad"
                                        min="1" value={count} max={props.stock} />
                            <button id="mas" onClick={handlerClicAdd}>+</button>
                        </div>

                        <div className="producto__contenedor__datos__precio" >
                            <p id="precio">{item.precio}</p>
                            <p>$</p>
                        </div>

                    </div>

                </div>

                <button className="producto__contenedor__datos__boton" id="agregar">Agregar <img src={img_cart} className="producto__contenedor__datos__boton__cart" alt="img_Cart" /> </button>

            </div>

        </div >
    )

}

export default ItemDetail;
