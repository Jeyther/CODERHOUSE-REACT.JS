import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const BuyerContainer = () => {

    const { productos, setOrden } = useContext(CartContext);

    const [buyerID, setBuyerID] = useState('');

    let total = productos.reduce((acumulador, producto) => (acumulador + (producto.item.precio * producto.quantity)), 0);

    const sendOrder = (e) => {

        e.preventDefault();

        let buyer = {

            nombre: e.target[0].value,
            email: e.target[1].value,
            direccion: e.target[2].value,

        }

        setOrden(buyer, total).then((response) => {

            setBuyerID(response);

        })

    }

    return (

        <div>

            <form onSubmit={sendOrder}>

                <input type="text" placeholder="Nombre y Apellido"></input>
                <input type="text" placeholder="Email"></input>
                <input type="text" placeholder="Direccion"></input>
                <button type="submit">Pagar</button>

            </form>

            {buyerID !== '' && <p style={{color:"black"}}>Su numero de compra es: {buyerID}</p>}

            {productos.length !== 0 && <p style={{color:"black"}} className="precio-total">Precio Total: {total}$</p>}

        </div>
    )

}

export default BuyerContainer;

