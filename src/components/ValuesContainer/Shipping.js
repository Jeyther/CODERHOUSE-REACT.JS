import React, { useState } from 'react';

const Shipping = (promp) => {

    const [estado, setEstado] = useState(false);

    const onChangeValue = (e) => {

        let value = e.target.value;

        
        if(value === 'tienda'){

            if(estado){

                promp.setShipping(0);
                setEstado(false);

            }

        }else{

            if(!estado){

                promp.setShipping(5);
                setEstado(true);

            }

        }

    }

    return (

        <div className="carrito__contenedor__valores__despacho">

            <h4 className="carrito__contenedor__valores__despacho__titulo">Despacho:</h4>

            <div className="carrito__contenedor__valores__despacho__radioButtons">

                <div>

                    <input type="radio" name="despacho" value="tienda" id="tienda" onClick={onChangeValue}
                        className="carrito__contenedor__valores__despacho__radioButtons__tienda"></input>
                    <label htmlFor="tienda" >Recojo en Tienda</label>
                </div>
                <div>

                    <input type="radio" name="despacho" value="domicilio" id="domicilio" onClick={onChangeValue}
                        className="carrito__contenedor__valores__despacho__radioButtons__domicilio"></input>
                    <label htmlFor="domicilio" >Envio a Domicilio</label>

                </div>

            </div>

            <p className="carrito__contenedor__valores__despacho__descripcion">El envio a domicilio tiene una
                recarga de 5$ en el precio total</p>

        </div>

    );

}

export default Shipping;