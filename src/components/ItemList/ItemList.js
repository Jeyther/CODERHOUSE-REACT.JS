import React, { useEffect, useState, useContext } from "react";
import './ItemList.css';
import { Link } from "react-router-dom";
import img_cart from './../../img/cart.png';

// import articulos from './../../articulos.json';


const ItemList = (props) => {


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

                                <Link to={"/itemList/" + articulo.id}>

                                    <img className="elemento__img" src={articulo.img} alt={articulo.img} />

                                    <p className="id-articulo" key={articulo.id}>{articulo.id}</p>

                                    <h4 className="elemento__titulo" id="nombre">{articulo.nombre}</h4>

                                    <p className="elemento__descripcion">{articulo.descripcion}</p>


                                    <div>

                                        <p className="elemento__precio" id="precio">{articulo.precio}</p>
                                        <p>$</p>
                                        
                                    </div>

                                    <button className="elemento__boton" id="agregar">Detalles</button>
                                </Link>

                            </div>
                        )

                    })
            }

        </div>
    )


}

export default ItemList;
