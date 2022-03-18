import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";

const BuyerContainer = () => {

    const carritoContext = useContext(CartContext);
    const { productos } = useContext(CartContext);

    const [buyerID, setBuyerID] = useState('');

    const sendOrden = (e) => {

        e.preventDefault();

        let buyer = {

            nombre: e.target[0].value,
            email: e.target[1].value,
            direccion: e.target[2].value,

        }

        let total = productos.reduce((acc,i)=>(acc + (i.item.precio * i.quantity)),0);

        carritoContext.setOrden(buyer, total).then((res)=>{

            setBuyerID(res);

        })

        // setBuyerID(id);

    }

    return (

        <div>

            <form onSubmit={sendOrden}>

                <input type="text" placeholder="Nombre y Apellido"></input>
                <input type="text" placeholder="Email"></input>
                <input type="text" placeholder="Direccion"></input>
                <button type="submit">Pagar</button>

            </form>

            {buyerID !=='' && <p>Su numero de compra es: {buyerID}</p>}

        </div>
    )

}

export default BuyerContainer;

