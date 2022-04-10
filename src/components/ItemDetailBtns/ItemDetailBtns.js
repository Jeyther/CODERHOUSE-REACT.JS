import React from "react";
import { Link } from "react-router-dom";

const BtnsItemDetail = () => {

  return (
    <div className="ItemDetailBtns">
      <Link to="/itemList" className="boton__seguirComprando">
        Seguir comprando
      </Link>
      <Link to="/cart" className="boton__verCarrito">
        Ver carrito
      </Link>
    </div>
  );

}

export default BtnsItemDetail;
