import React, { useState } from "react";
import { CartContext } from "./CartContext";

export const CustomCartContext = ({ children }) => {

    const [productos, setProductos] = useState([]);

    const addProduct = (newProduct, quantity) => {

        
        if (isInCart(newProduct.id)) {
            
            modifyProduct(newProduct.id,quantity);
            
        } else {
            console.log('entro ',newProduct, quantity);
            
            setProductos([...productos, { item: newProduct, quantity: quantity }]);
            console.log(productos);
        }


    }

    const removeProduct = (productID) => {

        for (const producto of productos) {

            if (producto.item.id === productID) {
                productos.splice(producto);
            }

        }

    }

    const clean = () => {

        productos.clean();

    }

    const isInCart = (productID) => {

        for (const producto of productos) {

            if (producto.item.id === productID) {
                return true;
            }
        }

        return false;

    }

    const modifyProduct = (productID, quantity) => {

        productos.map(function (producto) {
            if (producto.item.id === productID) {
                producto.quantity = quantity;
            }

            return producto;
        });

    }

    return(

        <CartContext.Provider value={{productos, addProduct, removeProduct, clean}}>

            {children}

        </CartContext.Provider>

    )

}
