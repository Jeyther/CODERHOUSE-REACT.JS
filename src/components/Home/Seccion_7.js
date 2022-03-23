import React from 'react';

const Seccion_7 = () => {
    return (

        <section className="seccion-7" id="S7">

            <h2 className="seccion-7__titulo">Contacto</h2>

            <form className="seccion-7__formulario" action="">

                <fieldset>

                    <div className="seccion-7__formulario__contenedor">

                        <input className="seccion-7__formulario__contenedor__campo__nombre" type="text" name="nombre"
                            placeholder="NOMBRE Y APELLIDO">
                        </input >

                        <select className="seccion-7__formulario__contenedor__campo__servicio" name="temas">
                            <option disabled >Tipo de Servicio</option>
                            <option defaultValue="nuevos">Consulta Canina</option>
                            <option defaultValue="rentables">Consulta Felina</option>
                            <option defaultValue="divertidos">Consulta General</option>
                            <option defaultValue="futuro">Otros</option>
                        </select>

                        <input className="seccion-7__formulario__contenedor__campo__correo" type="email" name="correo"
                            placeholder="CORREO ELECTRONICO">
                        </input >

                        <textarea className="seccion-7__formulario__contenedor__campo__mensaje" cols="30" rows="10"
                            placeholder="MENSAJE" name="mensaje"></textarea>


                    </div>

                    <div className="seccion-7__formulario__boton">
                        <button id="enviar-formulario" className="seccion-7__formulario__boton__enviar" type="submit">Enviar</button>
                    </div>

                </fieldset>

            </form>

        </section>

    );
}

export default Seccion_7;