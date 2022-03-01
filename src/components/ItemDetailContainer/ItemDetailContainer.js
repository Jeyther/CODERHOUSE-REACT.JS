import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';

import articulos from './../../articulos.json'


const ItemDetailContainer = (props) => {

    const { itemID } = useParams();

    const [item, setItem] = useState([]);

    useEffect(() => {

        getItem();

    });

    const getItem = () => {

        const promesa = new Promise((resolve, reject) => {

            setTimeout( () => { 
            resolve(articulos)
            }, 2000);

        })

        promesa.then(resultado => {

            setItem(resultado[itemID]);

        })

    }

    return (

        <div>

            <ItemDetail producto={item}  initial='1' stock = {12}/>

        </div>
    )

}

export default ItemDetailContainer;

