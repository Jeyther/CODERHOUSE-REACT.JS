import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Prices from "./Prices";
import Shipping from "./Shipping";
import { AlertContext } from "../../context/AlertContext";

const BuyerContainer = () => {

    const { inputWarning, petshopRedirection } = useContext(AlertContext);

    const { productos, setOrden } = useContext(CartContext);

    const [buyerID, setBuyerID] = useState('');

    const [shipping, setShipping] = useState(0);

    const [total, setTotal] = useState(0);


    const sendOrder = (e) => {

        e.preventDefault();
        if (productos.length > 0) {

            if (e.target[0].value.length > 0 && e.target[1].value.length > 0 && e.target[2].value.length > 0 && productos.length > 0) {

                let buyer = {

                    nombre: e.target[0].value,
                    email: e.target[1].value,
                    direccion: e.target[2].value

                }

                let envio = shipping === 0 ? false : true;

                setOrden(buyer, envio, total).then((response) => {

                    setBuyerID(response);

                })

            } else {

                inputWarning();

            }

        }else{

            petshopRedirection();

        }





    }

    useEffect(() => {

        if (productos.length !== 0) {
            setTotal(Number(productos.reduce((acumulador, producto) => (acumulador + (producto.item.precio * producto.quantity)), shipping)));
        } else {

            setTotal(0);

        };

    }, [productos, shipping]);

    return (


        <form onSubmit={sendOrder} className="carrito__contenedor__valores">


            <div className="carrito__contenedor__valores__buyer">
                <h4>Datos:</h4>
                <input type="text" placeholder="Nombre y Apellido" className="carrito__contenedor__valores__buyer__nombre"></input>
                <input type="text" placeholder="Email" className="carrito__contenedor__valores__buyer__correo"></input>
                <input type="text" placeholder="Dirección" className="carrito__contenedor__valores__buyer__direccion"></input>
            </div>

            <Shipping setShipping={setShipping} total={total} />

            <Prices productos={productos} total={total} envio={shipping} />

            <button type="submit" className="carrito__contenedor__valores__boton" >Pagar<img src="./img/flecha_abajo.png"
                alt="flecha" /></button>

            {buyerID !== '' && <p style={{ color: "black" }}>Su numero de compra es: {buyerID}</p>}

        </form>

    )

}

export default BuyerContainer;

