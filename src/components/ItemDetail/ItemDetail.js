import React, { useContext, useState } from "react";
import './ItemDetail.css'

import ItemCount from "../ItemCount/ItemCount";
import ItemDetailBtns from "../ItemDetailBtns/ItemDetailBtns";
import { CartContext } from "../../context/CartContext";



const ItemDetail = (props) => {

    let item = props.producto;

    const [cant, setCant] = useState(0);

    const carritoContext = useContext(CartContext);

    function onAdd(items) {

        setCant(items);

        carritoContext.addProduct(item,items); 

    }

    return (

        <div className="producto__contenedor" >

            <img className="producto__contenedor__img" src={item.img} alt={item.nombre} />

            <div className="producto__contenedor__datos" >

                <h1 className="producto__contenedor__datos__titulo" id='nombre'> {item.nombre}</h1>

                <p className='id-producto'>{item.id}</p>

                <div>

                    <p className="producto__contenedor__datos__descripcion"> {item.descripcion}</p>

                    <div style={{ display: 'flex', flexDirection: 'column' }}>

                        <div className="producto__contenedor__datos__precio" >
                            <p id="precio">{item.precio}</p>
                            <p>$</p>
                        </div>

                        {cant > 0 ?
                            <ItemDetailBtns/> :
                            <ItemCount initial='1' stock={12} addHandlerClick={(items) => onAdd(items)} />
                        }

                    </div>

                </div>

            </div>

        </div >
    )

}

export default ItemDetail;
