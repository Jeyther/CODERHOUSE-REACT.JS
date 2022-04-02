import React, { useContext, useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import {  useNavigate, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../utils/firebase';
import Recommended from "./RecommendedItems/Recommended";
import { AlertContext } from "../../context/AlertContext";


const ItemDetailContainer = () => {

    const navigate = useNavigate();

    const { unexist } = useContext(AlertContext);

    const { itemID } = useParams();

    const [item, setItem] = useState([]);

    useEffect(() => {

        getItem();

    }, [itemID]);


    const getItem = async () => {

        const docRef = doc(db, "items", itemID);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

            setItem({ id: docSnap.id, ...docSnap.data() });

        } else {

            unexist().then((result) => {

                if (result.isConfirmed) {

                    navigate("/itemList");

                }
            })
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

