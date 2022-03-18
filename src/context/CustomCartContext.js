import { addDoc, collection, doc, Timestamp, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { CartContext } from "./CartContext";
import { db } from '../utils/firebase';

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

        let elementosAlt = productos.filter((e)=> e.item.id !== productID);

        /* let elementos = productos;

        for (const [i, elemento] of elementos.entries()) {
            
            if (elemento.item.id === productID) {

                elementos.splice(i, 1);
                setCartCount(cartCount - elemento.quantity);
                break;

            }

        } */
        
        setProductos(elementosAlt);

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

    const setOrden = async (buyer, total) => {

        let orden = {

            buyer,
            productos,
            date: Timestamp.fromDate(new Date()),
            total

        }

        const ordenes = collection(db,'orders')

        try {
    
            const docRef = await addDoc(ordenes, orden);

            let buyerID = docRef.id;

            console.log('Id de la compra: ',buyerID);

        } catch (error) {
            
            console.log('error al obtener la referencia:',error);

        }

    } 

    const updateOrden = async ()=> {

        const queryDoc = doc(db,'orders','xWWa7uQauYCPgR3vpYSi');

        await updateDoc(queryDoc, {

            buyer:{

                name: 'Jeyther'

            }

        })

    }

    return (

        <CartContext.Provider value={{ productos, cartCount, addProduct, removeProduct, clean, setOrden }}>

            {children}

        </CartContext.Provider>

    )

}
