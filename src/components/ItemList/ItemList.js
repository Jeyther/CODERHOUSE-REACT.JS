import React from "react";
// import './ItemList.css';
import { Link } from "react-router-dom";
import spinner from './../../img/spinner.gif';

const ItemList = ({articulos}) => {

    return (

        <>

            {
                articulos.length === 0 ?
                    <>

                        <img  src={spinner} alt="spinner" className="petshop__contenedor__productos__spinner"/>
                        
                    </>
                    :
                    articulos.map((articulo) => {

                        return (

                            <div className="petshop__contenedor__productos__elemento" key={articulo.id}>

                                <Link to={"/itemList/" + articulo.id}> 

                                    <img className="petshop__contenedor__productos__elemento__img" src={articulo.img} alt={articulo.img} />

                                    <p className="id-producto">{articulo.id}</p>

                                    <h4 className="petshop__contenedor__productos__elemento__titulo">{articulo.nombre}</h4>

                                    <p className="petshop__contenedor__productos__elemento__descripcion">{articulo.descripcion}</p>


                                    <div>

                                        <p className="petshop__contenedor__productos__elemento__precio">{articulo.precio}
                                        <span>$</span></p>
                                        
                                    </div>

                                    <button className="petshop__contenedor__productos__elemento__boton">Detalles</button>
                                    
                                </Link>

                            </div>
                        )

                    })
            }

        </>
    )


}

export default ItemList;
