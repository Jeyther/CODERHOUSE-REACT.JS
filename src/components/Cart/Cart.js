import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = () => {

    const { productos } = useContext(CartContext);
    console.log(productos);

    return (

        <>

            {productos.length === 0 ?
                (<p>El carrito esta vacio</p>)
                :
                (productos.map((i) => {

                    return (

                        <>
                            <p>{i.item.nombre} x {i.quantity} = {i.quantity * i.item.precio}</p>
                            <img src={i.item.img} alt={i.item.nombre} style={{width: 200}}/>
                        </>

                    )

                }))}


        </>
    )


}

export default Cart;