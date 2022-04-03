import React from 'react';

const S3_Articulos = ({ articulos }) => {

    console.log('ARTICULOS,', articulos);

    return (

        articulos.map((articulo, index) => {

            return (

                <div className="seccion-3__grid__elemento" key={index}>

                    <a href='producto.html'>

                        <img className="seccion-3__grid__elemento__img" id="imagen" src={articulo.img} alt="comida_perro" />

                        <h4 className="seccion-3__grid__elemento__titulo" id="nombre">{articulo.nombre}</h4>

                        <p className="seccion-3__grid__elemento__descripcion" id="descripcion">{articulo.descripcion}</p>

                    </a>

                    <div>
                        <div>
                            <p className="seccion-3__grid__elemento__precio" id="precio">{articulo.precio}</p>
                            <p>$</p>
                        </div>
                    </div>

                    <button className="seccion-3__grid__elemento__boton" id="agregar">Agregar <img src="img/S3/cart.png" className="seccion-3__grid__elemento__boton__cart" /> </button>

                </div>
            )
        })

    );
}

export default S3_Articulos;