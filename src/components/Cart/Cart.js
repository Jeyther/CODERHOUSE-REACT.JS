import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {

    const {cartCount} = useContext(CartContext);

    return (

        <p style={{fontSize:"48px"}}>Este es el Carrito {cartCount}</p>

    )


}

export default Cart;