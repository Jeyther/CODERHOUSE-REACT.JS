import React, { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../utils/firebase';

const ItemListContainer = () => {

    const [elementos, setElementos] = useState([]);
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('todos');
    const [paginaSeleccionada, setPaginaSeleccionada] = useState('1');

    useEffect(() => {

        getData();

    }, [paginaSeleccionada])

    const getData = async () => {

        const query = collection(db, 'items');
        const response = await getDocs(query);
        const datos = response.docs.map(doc => { return { id: doc.id, ...doc.data() } });

        datos.sort((a, b) => { return a.id - b.id; });

        paginaActual(datos);

    }


    const clickCategoria = (event) => {

        let id = event.target.id;

        if (id !== 'categorias') {

            if (id !== "todos") {

                seleccionarCategoria(id);

            } else {

                getData();

            }

            cambiarClaseCategoria(id);

        }

    }

    const seleccionarCategoria = async (categoria) => {

        const q = query(collection(db, "items"), where("categoria", "==", categoria));

        const querySnapshot = await getDocs(q);

        const items = querySnapshot.docs.map(doc => { return { id: doc.id, ...doc.data() } });

        setElementos(items);

    }

    const cambiarClaseCategoria = (categoria) => {

        setCategoriaSeleccionada(categoria);

    }

    const paginaActual = (datos) => {

        if (paginaSeleccionada !== 'paginacion') {

            switch (paginaSeleccionada) {

                case '1':

                    let arr1 = datos.slice(0, 10);

                    setElementos(arr1)

                    break;
                case '2':

                    let arr2 = datos.slice(10, 20);

                    setElementos(arr2)

                    break;
                case '3':

                    let arr3 = datos.slice(20, 24);

                    setElementos(arr3)

                    break;

                default:
                    break;
            }

        }



    }

    const clickPagina = (event) => {

        let id = event.target.id;

        if (id !== 'paginacion') {

            setPaginaSeleccionada(id);

        }
    }


    // const cambiarClasePagina = (pagina) => {



    // }

    return (

        <main className="petshop">

            <h1 className="petshop__titulo">PetShop</h1>

            <div className="petshop__contenedor">

                <div className="petshop__contenedor__categorias" id="categorias" onClick={clickCategoria}>

                    <button id="perro" className={categoriaSeleccionada === 'perro' ? 'seleccionado' : ''} >Perros</button>
                    <button id="gato" className={categoriaSeleccionada === 'gato' ? 'seleccionado' : ''} >Gatos</button>
                    <button id="ave" className={categoriaSeleccionada === 'ave' ? 'seleccionado' : ''} >Aves</button>
                    <button id="todos" className={categoriaSeleccionada === 'todos' ? 'seleccionado' : ''}>Todos</button>

                </div>

                <div className="petshop__contenedor__productos">
                    <ItemList articulos={elementos} id="contenedor-productos" />
                </div>

                <div className="petshop__contenedor__paginacion" onClick={clickPagina}>

                    <ul id="paginacion">
                        <li id="1" className={paginaSeleccionada === '1' ? 'seleccionado' : ''}>1</li>
                        <li id="2" className={paginaSeleccionada === '2' ? 'seleccionado' : ''}>2</li>
                        <li id="3" className={paginaSeleccionada === '3' ? 'seleccionado' : ''}>3</li>
                    </ul>

                </div>

            </div>

        </main>
    )

}

export default ItemListContainer;