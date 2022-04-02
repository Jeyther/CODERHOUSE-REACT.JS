import React from 'react';

const Prices = ({productos, total, envio}) => {

    const igv = total * 0.18; 
    const subtotal = total - igv;

    return (

        <div className="carrito__contenedor__valores__costos">

            <h4 className="carrito__contenedor__valores__costos__titulo">Precio Total:</h4>

            <div className="carrito__contenedor__valores__costos__flex">

                <div>
                    <p>Subtotal:</p>
                    <div>
                        <p>{productos.length === 0 ? 0 : subtotal.toFixed(2) }</p>
                        <p>$</p>
                    </div>
                </div>

                <div>
                    <p>I.G.V. (18%):</p>
                    <div>
                        <p>{productos.length === 0 ? 0 : igv.toFixed(2) }</p>
                        <p>$</p>
                    </div>
                </div>

                <div>
                    <p>Envio:</p>
                    <div>
                        <p>{envio}</p>
                        <p>$</p>
                    </div>
                </div>

                <div className="carrito__contenedor__valores__costos__flex__total">
                    <p>Total:</p>
                    <div>
                        <p>{total}</p>
                        <p>$</p>
                    </div>
                </div>

            </div>

        </div>

    );
}

export default Prices;