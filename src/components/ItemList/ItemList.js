import React, { useEffect, useState, useContext } from "react";
import './ItemList.css';
import img_cart from './../../img/cart.png';
import { CustomCartContext } from "../../context/CustomCartContext";

// import articulos from './../../articulos.json';


const ItemList = (props) => {
    
    const isDarkMode = useContext(CustomCartContext);
    console.log('isDarkMode ',isDarkMode);

    const articulos = props.articulos;

    const [count, setCount] = useState(1);
    const [productos, setProducto] = useState([]);

    useEffect(() => {

        const promesa = new Promise((resolve, reject) => {

            setTimeout(() => { resolve(articulos) }, 2000);

        });
        promesa.then(resultado => {

            setProducto(resultado)

        })

    }, [articulos]);


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

        <div id="contenedor">

            {
                productos.length === 0 ?
                    <>
                        <p style={{ fontSize: '32px', color: 'white' }}>Cargando...</p>
                    </>
                    :
                    productos.map((articulo) => {

                        return (

                            <div className="elemento">

                                <a href={"/itemList/" + articulo.id}>

                                    <img className="elemento__img" src={articulo.img} alt={articulo.img} />

                                    <p className="id-articulo" key={articulo.id}>{articulo.id}</p>

                                    <h4 className="elemento__titulo" id="nombre">{articulo.nombre}</h4>

                                    <p className="elemento__descripcion">{articulo.descripcion}</p>

                                </a>

                                <div>
                                    <div className="elemento__cantidad">
                                        <button id="menos" onClick={handlerClicSubstract}>-</button>
                                        <input className="elemento__cantidad__contador" id="cantidad" type="number" placeholder="cantidad"
                                            min="1" value={count} max={props.stock} />
                                        <button id="mas" onClick={handlerClicAdd}>+</button>
                                    </div>
                                    <div>
                                        <p className="elemento__precio" id="precio">{articulo.precio}</p>
                                        <p>$</p>
                                    </div>
                                </div>

                                <button className="elemento__boton" id="agregar">Agregar <img src={img_cart} alt='img_carrito' className="elemento__boton__cart" /> </button>

                            </div>
                        )

                    })
            }



        </div>
    )


}

export default ItemList;
