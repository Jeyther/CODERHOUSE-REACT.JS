import React, { useContext } from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {

    return (

        <>

            <p>El carrito esta vacio</p>
            <Link to="/itemList">Visitar Tienda</Link>

        </>
    )


}

export default EmptyCart;