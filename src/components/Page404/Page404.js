import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {

    const navigate = useNavigate();

    const handleClick = () => {

        navigate("/");

    }

    return ( 

        <div className="page404__container">
            <img className="page404__container__img" src='../img/404.png' alt='404' />
            <button className="page404__container__btn" onClick={handleClick}>Volver al inicio</button>
        </div>

     );
     
}
 
export default Page404;