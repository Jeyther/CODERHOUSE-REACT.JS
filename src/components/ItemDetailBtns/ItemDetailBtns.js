import React from "react";
import { Link } from "react-router-dom";

import "./ItemDetailBtns.css"

function BtnsItemDetail() {
  return (
    <>
      <Link to="/itemList" className="boton__seguirComprando">
        Seguir comprando
      </Link>
      <Link to="/cart" className="boton__verCarrito">
        Ver carrito
      </Link>
    </>
  );
}

export default BtnsItemDetail;
