import React from 'react';
import { Link } from 'react-router-dom';

const S3_Articulos = ({ articulos }) => {


    return (

        articulos.map((articulo, index) => {

            return (

                <div className="seccion-3__grid__elemento" key={index}>



                    <img className="seccion-3__grid__elemento__img" id="imagen" src={articulo.img} alt="comida_perro" />

                    <h4 className="seccion-3__grid__elemento__titulo" id="nombre">{articulo.nombre}</h4>

                    <p className="seccion-3__grid__elemento__descripcion" id="descripcion">{articulo.descripcion}</p>

                    <div>
                        <div>
                            <p className="seccion-3__grid__elemento__precio" id="precio">{articulo.precio}</p>
                            <p>$</p>
                        </div>
                    </div>
                    <Link to={"/itemList/" + articulo.id}>
                        <button className="seccion-3__grid__elemento__boton" id="agregar">Detalles<img src="img/S3/cart.png" alt={articulo.nombre} className="seccion-3__grid__elemento__boton__cart" /> </button>

                    </Link>
                </div>
            )
        })

    );
}

export default S3_Articulos;