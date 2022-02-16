import React from "react";
import ItemContainer from "../ItemContainer/ItemContainer";


const ItemListContainer = (props) => {

    return (

        <div>

            <h1 id="titulo">¡Hola Esto es un {props.tittle}!</h1>

            <ItemContainer stock='10' initial='1' />

        </div>
    )

}

export default ItemListContainer;