import React, { useState } from "react";
import { CartContext } from "./CartContext";

export const CustomCartContext = ({ children }) => {

    const [productos, setProductos] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    const addProduct = (newProduct, quantity) => {


        if (isInCart(newProduct.id)) {

            modifyProduct(newProduct.id, quantity);

        } else {

            setProductos([...productos, { item: newProduct, quantity: quantity }]);
        }

        setCartCount((prev) => prev + quantity);

    }

    const removeProduct = (productID) => {

        let elementos = productos;

        for (const elemento of elementos) {

            if (elemento.item.id === productID) {
                elementos.splice(elemento,1);
            }

        }

        setProductos(elementos);

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
                producto.quantity += quantity;
            }

            return producto;
        });

    }

    return (

        <CartContext.Provider value={{ productos, cartCount, addProduct, removeProduct, clean }}>

            {children}

        </CartContext.Provider>

    )

}
