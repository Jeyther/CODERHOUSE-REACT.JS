import React from "react";

import ItemList from "../ItemList/ItemList";

import articulos from './../../articulos.json'

const ItemListContainer = (props) => {


    return (

        <div>

            <h1 id="titulo">¡Hola Esto es un {props.tittle}!</h1>

            <ItemList stock='10' initial='1' articulos={articulos} />

        </div>
    )

}

export default ItemListContainer;