import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import EmptyCart from "./EmptyCart";
import { AlertContext } from "../../context/AlertContext";
import "./Cart.css";
import ItemCart from "./ItemCart/ItemCart";
import Swal from 'sweetalert2';

const Cart = () => {

    const { productos, removeProduct, cleanCart } = useContext(CartContext);
    const { CartClear } = useContext(AlertContext);

    const cartCleaner = () => {

        CartClear().then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    '¡Eliminados!',
                    'Los productos del carrito han sido eliminados.',
                    'success'
                )
                cleanCart();
            }
        });
    }


    return (

        <div className="carrito__contenedor__productos">

            <h2 className="carrito__contenedor__productos__titulo">Carrito</h2>

            <div className="carrito__contenedor__productos__elementos">

                {productos.length === 0 ?
                    <EmptyCart />
                    :
                    <>
                        <ItemCart productos={productos} handlerClick={(productoID) => removeProduct(productoID)} />
                        <button id="vaciar-carrito" onClick={cartCleaner}>Vaciar Carrito</button>
                    </>
                }

            </div>

        </div >
    )


}

export default Cart;