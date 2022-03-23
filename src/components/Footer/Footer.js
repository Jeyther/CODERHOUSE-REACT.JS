import React from 'react';
// import "./../../scss/Footer.scss";

const Footer = () => {
    return (

        <footer className="footer">

            <img className="footer__logo" src="img/LOGO.png" alt="jeyther tech" />

            <div className="footer__block">

                <div className="footer__redes">

                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/JeytherTech" className="Facebook"><img
                        src="img/redes/facebook.png" alt="facebook" /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.instagram.com/jeyther_tech/" className="Instagram"><img
                        src="img/redes/instagram.png" alt="instagram" /></a>
                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/c/JeytherTech" className="Youtube"><img
                        src="img/redes/youtube.png" alt="youtube" /></a>
                    <a target="_blank" rel="noreferrer" href="https://twitter.com/JeytherJYS" className="Twiiter"><img
                        src="img/redes/twitter.png" alt="twitter" /></a>
                    <a target="_blank" rel="noreferrer" href="mailto:jeyther13@gmail.com" className="Correo"><img src="img/redes/correo.png"
                        alt="correo" /></a>

                </div>


                <p className="footer__derechos">Diseñado por Jeyther Yriza - Todos los derechos reservados. Proyecto
                    Javascript.
                    CODERHOUSE 2021.</p>

            </div>

        </footer>

    );
}

export default Footer;