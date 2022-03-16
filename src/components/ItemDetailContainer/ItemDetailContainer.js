import React, { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
import {doc, getDoc} from 'firebase/firestore'
import { db } from '../../utils/firebase';


const ItemDetailContainer = () => {

    const { itemID } = useParams();

    const [item, setItem] = useState([]);

    useEffect(() => {

        getItem();

    });

    const getItem = async () => {

        const docRef = doc(db,"items",itemID);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

            setItem({id: docSnap.id, ...docSnap.data()});
            
        }

    }

    return (

        <div>

            <ItemDetail producto={item}  initial='1' stock = {12}/>

        </div>
    )

}

export default ItemDetailContainer;

