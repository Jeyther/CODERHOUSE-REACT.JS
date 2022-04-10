import React from 'react';
import Swal from 'sweetalert2';
import { AlertContext } from "./AlertContext";

export const CustomAlertContext = ({ children }) => {

    const Added = () => {

        const Toast = Swal.mixin({

            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true

        })

        Toast.fire({

            icon: 'success',
            title: 'producto agregado correctamente'

        })

    }

    const Removed = () => {

        const Toast = Swal.mixin({

            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true

        })

        Toast.fire({

            icon: 'success',
            title: 'producto eliminado correctamente'

        })



    }

    const inputWarning = () => {

        Swal.fire({

            title: 'Por Favor',
            text: 'Rellene todos los campos',
            icon: 'warning',
            confirmButtonText: 'Aceptar'

        });

    }

    const petshopRedirection = () => {

        return Swal.fire({

            title: 'Alerta',
            text: 'Primero debe agregar algun producto al carrito',
            icon: 'warning',
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText: '<Navigate to="/petshop">Ir al PetShop</Navigate>',
            cancelButtonText: 'Cancelar',

        });

    }

    const CartClear = () => {


        return Swal.fire({
            title: '¿Estás Seguro?',
            text: "No podras revertir esta acción al eliminar los productos del carrito!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#FBB158',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, eliminar!'
        });

    }

    const order = (id, envio) => {

        Swal.fire({
            title:'Compra Realizada!',
            text: envio > 0 ? 'Sus productos seran enviados pronto a su domicilio' :'Prono le notificaremos cuando podrá acercarse a returar los productos.',
            html: '<p>Gracias por su compra, su numero de orden es: <b style={{ color: "blue" }}>'+id+'</b></p>',
            icon: 'success',
            confirmButtonColor: '#FBB158',
            confirmButtonText: '¡Gracias!'
        }
        )

    }

    const unexist = () => {

        return Swal.fire({
            title: 'Error 404',
            text: 'El producto que desea ver no existe',
            icon: 'error',
            confirmButtonColor: '#FBB158',
            confirmButtonText: 'volver'
        });


    }

    return (

        <AlertContext.Provider value={{ Added, Removed, inputWarning, petshopRedirection, CartClear, order, unexist }}>

            {children}

        </AlertContext.Provider>

    )


}
