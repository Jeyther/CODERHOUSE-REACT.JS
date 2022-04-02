import React from "react";
import Cart from "../Cart/Cart";
import Values from "../ValuesContainer/ValuesContainer"


const CartContainer = () => {

    return (

        <main className="carrito">

            <div className="carrito__contenedor">

                <Cart />
                <Values />

            </div>

        </main>
    )

}

export default CartContainer;

