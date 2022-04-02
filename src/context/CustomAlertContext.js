import React from 'react';
import Swal from 'sweetalert2';
import { AlertContext } from "./AlertContext";
import { Link, Navigate } from 'react-router-dom';


export const CustomAlertContext = ({ children }) => {

    // const navigate = useNavigate();

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

        Swal.fire({

            title: 'Alerta',
            text: 'Primero debe agregar algun producto al carrito',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Ir al PetShop'

        }).then((result) => {
         
            if (result.isConfirmed) {

                console.log('entro');
                return (<Link to="/petshop"></Link>);


            }

            
        });

    }

    return (

        <AlertContext.Provider value={{ Added, Removed, inputWarning, petshopRedirection }}>

            {children}

        </AlertContext.Provider>

    )


}
/* 
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
 */