import React from 'react';
import { Link } from 'react-router-dom';

const Seccion_3 = () => {
    return (

        <section className="seccion-3" id="S3">

            <h2 className="seccion-3__titulo">PetShop</h2>

            <div className="seccion-3__grid" id="contenedor">

                <div className="seccion-3__grid__articulo">

                    <img className="seccion-3__grid__articulo__img" src="img/S3/perro/comida_perro-0.jpg" alt="comida_perro-0"/>

                        <h4 className="seccion-3__grid__articulo__titulo">Comida de Perro 0</h4>
                        <p className="seccion-3__grid__articulo__subtitulo">Este alimento esta adecuadamente balanceado y es
                            altamente digestible. Alimento Super Premium formulado con los requerimientos especiales de los
                            perros de razas medianas.</p>

                </div>

            </div>

            <Link className="seccion-3__boton" to="/itemList">
                <p className="seccion-3__boton__texto">Ir a la Tienda</p>
                <img src="img/flecha_abajo.png" alt="flecha" className="seccion-3__boton__flecha"/>
            </Link>

        </section>

    );
}

export default Seccion_3;