import React, { useContext, useState } from "react";

import ItemCount from "../ItemCount/ItemCount";
import ItemDetailBtns from "../ItemDetailBtns/ItemDetailBtns";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({producto}) => {

    const [cant, setCant] = useState(0);

    const carritoContext = useContext(CartContext);

    function onAdd(cantidad) {

        setCant(cantidad);

        carritoContext.addProduct(producto,cantidad); 

    }

    return (

        <div className="producto__contenedor" >

            <img className="producto__contenedor__img" src={producto.img} alt={producto.nombre} />

            <div className="producto__contenedor__datos">

                <h1 className="producto__contenedor__datos__titulo" id='nombre'> {producto.nombre}</h1>

                <p className='id-producto'>{producto.id}</p>

                <div>

                    <p className="producto__contenedor__datos__descripcion"> {producto.descripcion}</p>

                    <div>

                        <div className="producto__contenedor__datos__precio" >
                            <p id="precio">{producto.precio}</p>
                            <p>$</p>
                        </div>

                        {cant > 0 ?
                            <ItemDetailBtns/> :
                            <ItemCount initial={1} stock={12} addHandlerClick={(cantidad) => onAdd(cantidad)} />
                        }

                    </div>

                </div>

            </div>

        </div >
    )

}

export default ItemDetail;
