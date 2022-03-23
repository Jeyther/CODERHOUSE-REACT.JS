import React from 'react';

const Seccion_5 = () => {
    return (

        <section className="seccion-5" id="S5">

            <h2 className="seccion-5__titulo">Nuestros Profesionales</h2>


            <div className="seccion-5__flex">

                <div className="seccion-5__flex__grid">

                    <div className="seccion-5__flex__grid__elemento">

                        <div className="seccion-5__flex__grid__elemento__contenedor">
                            <img src="img/S5/veterinario-1.jpg" alt="veterinario-1"
                                className="seccion-5__flex__grid__elemento__contenedor__img"/>
                        </div>
                        <div className="seccion-5__flex__grid__elemento__texto">
                            <h3 className="seccion-5__flex__grid__elemento__texto__titulo">María Lupe</h3>
                            <p className="seccion-5__flex__grid__elemento__texto__subtitulo">Especialista Felino</p>
                        </div>
                    </div>

                    <div className="seccion-5__flex__grid__elemento">

                        <div className="seccion-5__flex__grid__elemento__contenedor">
                            <img src="img/S5/veterinario-2.jpg" alt="veterinario-2"
                                className="seccion-5__flex__grid__elemento__contenedor__img"/>
                        </div>
                        <div className="seccion-5__flex__grid__elemento__texto">
                            <h3 className="seccion-5__flex__grid__elemento__texto__titulo">Jose Aguirre</h3>
                            <p className="seccion-5__flex__grid__elemento__texto__subtitulo">Especialista Canino</p>
                        </div>
                    </div>

                    <div className="seccion-5__flex__grid__elemento">

                        <div className="seccion-5__flex__grid__elemento__contenedor">
                            <img src="img/S5/veterinario-3.jpg" alt="veterinario-3"
                                className="seccion-5__flex__grid__elemento__contenedor__img"/>
                        </div>
                        <div className="seccion-5__flex__grid__elemento__texto">
                            <h3 className="seccion-5__flex__grid__elemento__texto__titulo">Juan Gonzales</h3>
                            <p className="seccion-5__flex__grid__elemento__texto__subtitulo">Medico General</p>
                        </div>
                    </div>

                </div>

                <div className="seccion-5__flex__elemento">

                    <img src="img/S5/veterinario-4.png" alt="veterinario-5" className="seccion-5__flex__elemento__img"/>

                        <div className="seccion-5__flex__elemento__flex">

                            <h3 className="seccion-5__flex__elemento__flex__titulo">Andrea Nuñez</h3>

                            <p className="seccion-5__flex__elemento__flex__subtitulo">Medico General</p>

                            <p className="seccion-5__flex__elemento__flex__descripcion">Una persona amante de los animales, que
                                dedica su vida al cuidado y proteccion de las mascotas</p>

                        </div>

                </div>

            </div>

        </section>

    );
}

export default Seccion_5;