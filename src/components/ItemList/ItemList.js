import React, { useEffect, useState } from "react";
import './ItemList.css';
import { Link } from "react-router-dom";
import spinner from './../../img/spinner.gif';

// import articulos from './../../articulos.json';


const ItemList = (props) => {


    const articulos = props.articulos;

    const [productos, setProducto] = useState([]);

    useEffect(() => {

        const promesa = new Promise((resolve, reject) => {

            // setTimeout(() => { 
                resolve(articulos)
            //  }, 1000);

        });
        promesa.then(resultado => {

            setProducto(resultado)

        })

    }, [articulos]);


    return (

        <div id="contenedor">

            {
                productos.length === 0 ?
                    <>

                        <img className="itemList__spinner"src={spinner} alt="spinner"/>
                        
                    </>
                    :
                    productos.map((articulo) => {

                        return (

                            <div className="elemento" key={articulo.id}>

                                <Link to={"/itemList/" + articulo.id}>

                                    <img className="elemento__img" src={articulo.img} alt={articulo.img} />

                                    <p className="id-articulo" key={articulo.id}>{articulo.id}</p>

                                    <h4 className="elemento__titulo" id="nombre">{articulo.nombre}</h4>

                                    <p className="elemento__descripcion">{articulo.descripcion}</p>


                                    <div>

                                        <p className="elemento__precio" id="precio">{articulo.precio}
                                        <span>$</span></p>
                                        
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
