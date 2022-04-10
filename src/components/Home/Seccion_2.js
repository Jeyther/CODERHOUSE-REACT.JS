import React from 'react';


const seccion_2 = () => {

    return (

        <section className="seccion-2" id="seccion2">

            <h2 className="seccion-2__titulo">Servicios</h2>

            <div className="seccion-2__grid">
                <div className="seccion-2__grid__elemento">

                    <img src="img/S2/bath_icono.png" alt="bath_icono" className="seccion-2__grid__elemento__img" />
                    <p className="seccion-2__grid__elemento__texto">Baños y cortes</p>

                </div>
                <div className="seccion-2__grid__elemento">

                    <img src="img/S2/cat_icono.png" alt="cat_icono" className="seccion-2__grid__elemento__img" />
                    <p className="seccion-2__grid__elemento__texto">Especialistas gatunos</p>

                </div>
                <div className="seccion-2__grid__elemento">

                    <img src="img/S2/dog_icono.png" alt="dog_icono" className="seccion-2__grid__elemento__img" />
                    <p className="seccion-2__grid__elemento__texto">Especialistas perrunos</p>

                </div>
                <div className="seccion-2__grid__elemento">

                    <img src="img/S2/food_icono.png" alt="food_icono" className="seccion-2__grid__elemento__img" />
                    <p className="seccion-2__grid__elemento__texto">Venta de alimentos</p>

                </div>
                <div className="seccion-2__grid__elemento">

                    <img src="img/S2/hotel_icono.png" alt="hotel_icono" className="seccion-2__grid__elemento__img" />
                    <p className="seccion-2__grid__elemento__texto">Hospedaje y cuidado</p>

                </div>
                <div className="seccion-2__grid__elemento">

                    <img src="img/S2/vet_icono.png" alt="vet_icono" className="seccion-2__grid__elemento__img" />
                    <p className="seccion-2__grid__elemento__texto">Consultas veterinarias</p>

                </div>

            </div>

        </section>

    );
}

export default seccion_2;