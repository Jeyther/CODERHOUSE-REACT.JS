import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../utils/firebase';
import Recommended from "./RecommendedItems/Recommended";


const ItemDetailContainer = () => {

    const { itemID } = useParams();

    const [item, setItem] = useState([]);

    useEffect(() => {

        getItem();

    },[itemID]);


    const getItem = async () => {

        const docRef = doc(db, "items", itemID);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

            setItem({ id: docSnap.id, ...docSnap.data() });

        } else {

            console.log("Error al cargar el articulo: el articulo no existe");

        }

    }

    return (

        <main className="producto">

            <ItemDetail producto={item} />

            <Recommended />

        </main>
    )

}

export default ItemDetailContainer;

