import React, { useEffect, useState } from "react";
import './ItemList.css';

import img_cart from './../../img/cart.png';

// import articulos from './../../articulos.json';

const ItemList = (props) => {

    const articulos = props.articulos.map(elemento => elemento);

    const [count, setCount] = useState(1);
    const [productos, setProducto] = useState([]);

    useEffect(() => {

        const promesa = new Promise((resolve, reject) => {
    
            setTimeout( () => { resolve(articulos) }, 2000);
    
        });
        promesa.then(resultado => {

            setProducto(resultado)

        })

    },[articulos]);


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

    return <div id="contenedor">

        {
            productos.length === 0 ? 
            <>
                <p style={{fontSize:'32px', color: 'white'}}>Cargando...</p>
            </>            
            :
            productos.map((articulo) => {

                return (

                    <div class="elemento">
                        
                        <a href='index.html'>

                            <img class="elemento__img" src={articulo.img} alt={articulo.img} />

                            <p class="id-articulo" key={articulo.id}>{articulo.id}</p>

                            <h4 class="elemento__titulo" id="nombre">{articulo.nombre}</h4>

                            <p class="elemento__descripcion">{articulo.descripcion}</p>

                        </a>

                        <div>
                            <div class="elemento__cantidad">
                                <button id="menos" onClick={handlerClicSubstract}>-</button>
                                <input class="elemento__cantidad__contador" id="cantidad" type="number" placeholder="cantidad"
                                    min="1" value={count} max={props.stock} />
                                <button id="mas" onClick={handlerClicAdd}>+</button>
                            </div>
                            <div>
                                <p class="elemento__precio" id="precio">{articulo.precio}</p>
                                <p>$</p>
                            </div>
                        </div>

                        <button class="elemento__boton" id="agregar">Agregar <img src={img_cart} alt='img_carrito' class="elemento__boton__cart" /> </button>

                    </div>
                )

            })
        }


    </div>



}

export default ItemList;
