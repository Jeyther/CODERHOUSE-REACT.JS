import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import EmptyCart from "./EmptyCart";
import "./Cart.css";
import ItemCart from "./ItemCart/ItemCart";

const Cart = () => {

    const { productos } = useContext(CartContext);
    const carritoContext = useContext(CartContext);


    let total = 0;

    for (const producto of productos) {

        total += (producto.item.precio * producto.quantity);

    }

    function eliminarProduco(productoID){

        carritoContext.removeProduct(productoID)

    }

    return (

        <div id="contenedor-productos">

            {productos.length === 0 ?
                <EmptyCart />
                :
                (productos.map((i) => {

                    return (

                        <ItemCart producto={i} addHandlerClick={(productoID) => eliminarProduco(productoID)}/>

                    )

                }))
            }
            {productos.length !== 0 && <p className="precio-total">Precio Total: {total}$</p>}

        </div >
    )


}

export default Cart;