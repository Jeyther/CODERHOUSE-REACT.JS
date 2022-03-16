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

        // let elementos = productos.filter((e)=> e.id !== productID);
        let elementos = productos;
        console.log('productos: ', productos);
        console.log('productID ', productID);

        for (const elemento of elementos) {

            console.log('id elemento for: ', elemento.item.id);
            
            if (elemento.item.id === productID) {
                console.log('entro ', elemento.item.id);
                elementos.splice(elemento, 1);//no estoy indicando el elemento a eliminar correctamente
                setCartCount(cartCount - elemento.quantity);
                break;
            }

        }
        setProductos(elementos);
        console.log('elementos: ',elementos);

    }

    const clean = () => {

        setCartCount(0);
        setProductos([]);

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
