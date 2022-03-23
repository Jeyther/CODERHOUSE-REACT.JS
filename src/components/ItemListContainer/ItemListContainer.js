import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from 'firebase/firestore';
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

        <main className="petshop">

            <h1 className="petshop__titulo">PetShop</h1>

            <div className="petshop__contenedor">

                <div className="petshop__contenedor__categorias" id="categorias" onClick={clickCategoria}>

                    <button id="perro">Perros</button>
                    <button id="gato">Gatos</button>
                    <button id="ave">Aves</button>
                    <button id="todos" className="seleccionado">Todos</button>

                </div>

                <ItemList articulos={elementos} class="petshop__contenedor__productos" id="contenedor-productos" />

                <div className="petshop__contenedor__paginacion">

                    <ul id="paginacion">
                        <li className="seleccionado" id="page_1">1</li>
                        <li id="page_2">2</li>
                        <li id="page_3">3</li>
                    </ul>

                </div>

            </div>

        </main>
    )

}

export default ItemListContainer;