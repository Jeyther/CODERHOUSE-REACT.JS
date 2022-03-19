import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import EmptyCart from "./EmptyCart";
import "./Cart.css";
import ItemCart from "./ItemCart/ItemCart";

const Cart = () => {

    const { productos, removeProduct } = useContext(CartContext);

    return (

        <div id="contenedor-productos">

            {productos.length === 0 ?
                <EmptyCart />
                :
                (productos.map((i) => {

                    return (

                        <ItemCart key={i.id} producto={i} handlerClick={(productoID) => removeProduct(productoID)}/>

                    )

                }))
            }

        </div >
    )


}

export default Cart;