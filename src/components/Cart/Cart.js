import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import EmptyCart from "./EmptyCart";
import "./Cart.css";
import ItemCart from "./ItemCart/ItemCart";

const Cart = () => {

    const { productos, removeProduct, cleanCart } = useContext(CartContext);

    return (

        <div className="carrito__contenedor__productos">

            <h2 className="carrito__contenedor__productos__titulo">Carrito</h2>

            <div className="carrito__contenedor__productos__elementos">

                {productos.length === 0 ?
                    <EmptyCart />
                    :
                    <>
                        <ItemCart productos={productos} handlerClick={(productoID) => removeProduct(productoID)} />
                        <button id="vaciar-carrito" onClick={cleanCart}>Vaciar Carrito</button>
                    </>
                }

            </div>

        </div >
    )


}

export default Cart;