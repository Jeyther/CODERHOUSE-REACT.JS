import React from "react";
import './ItemList.css';
import { Link } from "react-router-dom";
import spinner from './../../img/spinner.gif';

const ItemList = ({articulos}) => {

    return (

        <div id="contenedor">

            {
                articulos.length === 0 ?
                    <>

                        <img className="itemList__spinner"src={spinner} alt="spinner"/>
                        
                    </>
                    :
                    articulos.map((articulo) => {

                        return (

                            <div className="petshop__contenedor__productos__elemento" key={articulo.id}>

                                <Link to={"/itemList/" + articulo.id} id='producto-seleccionado'> 

                                    <img className="petshop__contenedor__productos__elemento__img" src={articulo.img} alt={articulo.img} />

                                    <p className="id-producto" key={articulo.id}>{articulo.id}</p>

                                    <h4 className="petshop__contenedor__productos__elemento__titulo" id="nombre">{articulo.nombre}</h4>

                                    <p className="petshop__contenedor__productos__elemento__descripcion">{articulo.descripcion}</p>


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
