import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../utils/firebase';

const ItemListContainer = () => {

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

    const clickCategoria = (event) => {

        let target = event.target;

        if (target.id !== "todos") {

            seleccionarCategoria(target.id);

        } else {

            getData();

        }

    }

    const seleccionarCategoria = async (categoria) => {

        const q = query(collection(db, "items"), where("categoria", "==", categoria));

        const querySnapshot = await getDocs(q);

        const items = querySnapshot.docs.map(doc => { return { id: doc.id, ...doc.data() } });

        setElementos(items);

    }

    return (

        <div>

            <div className="petshop__contenedor__categorias" id="categorias" onClick={clickCategoria}>

                <button id="perro">Perros</button>
                <button id="gato">Gatos</button>
                <button id="ave">Aves</button>
                <button id="todos" className="seleccionado">Todos</button>

            </div>

            <ItemList stock='10' initial='1' articulos={elementos} />

        </div>
    )

}

export default ItemListContainer;