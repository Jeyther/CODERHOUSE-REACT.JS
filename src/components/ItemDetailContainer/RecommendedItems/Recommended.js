import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import db from '../../../utils/firebase';

const Recommended = () => {

    const [elementos, setElementos] = useState([]);

    useEffect(() => {

        getData();

    }, []);

    const getData = async () => {

        const query = collection(db, 'items');
        const response = await getDocs(query);
        const datos = response.docs.map(doc => { return { id: doc.id, ...doc.data() } });

        datos.sort((a, b) => { return a.id - b.id; });

        setElementos(selectRandomElementsFromArray(datos, 4));

    }

    const selectRandomElementsFromArray = (array, numberOfElements) => {

        let randomElements = [];

        while (randomElements.length < numberOfElements) {

            let randomIndex = Math.floor(Math.random() * array.length);

            if (!randomElements.includes(array[randomIndex])) {

                randomElements.push(array[randomIndex]);

            }

        }

        return randomElements;

    }

    return (

        <div className="producto__recomendados" >

            <h3 className="producto__recomendados__titulo">Productos Recomendados</h3>

            <div className="producto__recomendados__contenedor" id="contenedor-recomendados">
                {

                    elementos.map((recomendado, index) => {

                        return (

                            <div className="producto__recomendados__contenedor__elemento" key={index}>

                                <Link to={"/itemList/"+2}>

                                    <img className="producto__recomendados__contenedor__elemento__img" src={recomendado.img} alt={recomendado.nombre} />

                                    <p id="id-producto">{recomendado.id}</p>

                                    <h4 className="producto__recomendados__contenedor__elemento__titulo" id="nombre">{recomendado.nombre}</h4>

                                    <p className="producto__recomendados__contenedor__elemento__descripcion">{recomendado.descripcion}</p>

                                    <div>
                                        <p className="producto__recomendados__contenedor__elemento__precio" id="precio">{recomendado.precio}</p>
                                        <p>$</p>
                                    </div>

                                    <button className="producto__recomendados__contenedor__elemento__boton" id="agregar">Detalles</button>
                                
                                </Link>

                            </div>
                        )
                    })

                }
            </div>

        </div>

    );

}

export default Recommended;