import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../utils/firebase';

const ItemListContainer = (props) => {

    const [elementos, setElementos] = useState([]);

    useEffect(() => {

        getData();

    }, [])

    const getData = async () => {

        const query = collection(db, 'items');
        const response = await getDocs(query);
        const datos = response.docs.map(doc => { return { id: doc.id, ...doc.data() } });

        datos.sort((a, b) => { return a.id - b.id; });

        setElementos(datos);

    }

    return (

        <div>

            <h1 id="titulo">¡Hola Esto es un {props.tittle}!</h1>

            <ItemList stock='10' initial='1' articulos={elementos} />

        </div>
    )

}

export default ItemListContainer;