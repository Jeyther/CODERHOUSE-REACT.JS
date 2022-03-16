
const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: "AIzaSyC-ix-BdYZsTVJBRvDvjTxHqaeDDd04i3w",
    authDomain: "veterinaria-petshop.firebaseapp.com",
    projectId: "veterinaria-petshop"
  });
  
var db = firebase.firestore();

var items = [
    {
        "id": 0,
        "nombre": "Comida Perro 1",
        "descripcion": "esta es la comida de perro numero 1",
        "tipo": "perro",
        "precio": 60,
        "img": "../img/articulos/perro/comida_perro-1.jpg"
    },
    {
        "id": 1,
        "nombre": "Comida Perro 2",
        "descripcion": "esta es la comida de perro numero 2",
        "tipo": "perro",
        "precio": 100,
        "img": "../img/articulos/perro/comida_perro-2.jpg"
        
    },
    {
        "id": 2,
        "nombre": "Comida Perro 3",
        "descripcion": "esta es la comida de perro numero 3",
        "tipo": "perro",
        "precio": 150,
        "img": "../img/articulos/perro/comida_perro-3.jpg"
        
    },
    {
        "id": 3,
        "nombre": "Comida Perro 4",
        "descripcion": "esta es la comida de perro numero 4",
        "tipo": "perro",
        "precio": 80,
        "img": "../img/articulos/perro/comida_perro-4.jpg"
        
    },
    {
        "id": 4,
        "nombre": "Comida Perro 5",
        "descripcion": "esta es la comida de perro numero 5",
        "tipo": "perro",
        "precio": 300,
        "img": "../img/articulos/perro/comida_perro-5.jpg"
        
    },
    {
        "id": 5,
        "nombre": "Comida Perro 6",
        "descripcion": "esta es la comida de perro numero 6",
        "tipo": "perro",
        "precio": 750,
        "img": "../img/articulos/perro/comida_perro-6.jpg"
        
    },
    {
        "id": 6,
        "nombre": "Comida Perro 7",
        "descripcion": "esta es la comida de perro numero 7",
        "tipo": "perro",
        "precio": 90,
        "img": "../img/articulos/perro/comida_perro-7.jpg"
        
    },
    {
        "id": 7,
        "nombre": "Comida Perro 8",
        "descripcion": "esta es la comida de perro numero 8",
        "tipo": "perro",
        "precio": 210,
        "img": "../img/articulos/perro/comida_perro-8.jpg"
        
    },
    {
        "id": 8,
        "nombre": "Comida Gato 1",
        "descripcion": "esta es la comida de gato numero 1",
        "tipo": "gato",
        "precio": 60,
        "img": "../img/articulos/gato/comida_gato-1.jpg"
    },
    {
        "nombre": "Comida Gato 2",
        "id": 9,
        "descripcion": "esta es la comida de gato numero 2",
        "tipo": "gato",
        "precio": 100,
        "img": "../img/articulos/gato/comida_gato-2.jpg"
        
    },
    {
        "id": 10,
        "nombre": "Comida Gato 3",
        "descripcion": "esta es la comida de gato numero 3",
        "tipo": "gato",
        "precio": 150,
        "img": "../img/articulos/gato/comida_gato-3.jpg"
        
    },
    {
        "id": 11,
        "nombre": "Comida Gato 4",
        "descripcion": "esta es la comida de gato numero 4",
        "tipo": "gato",
        "precio": 80,
        "img": "../img/articulos/gato/comida_gato-4.jpg"
        
    },
    {
        "id": 12,
        "nombre": "Comida Gato 5",
        "descripcion": "esta es la comida de gato numero 5",
        "tipo": "gato",
        "precio": 300,
        "img": "../img/articulos/gato/comida_gato-5.jpg"
        
    },
    {
        "id": 13,
        "nombre": "Comida Gato 6",
        "descripcion": "esta es la comida de gato numero 6",
        "tipo": "gato",
        "precio": 750,
        "img": "../img/articulos/gato/comida_gato-6.jpg"
        
    },
    {
        "id": 14,
        "nombre": "Comida Gato 7",
        "descripcion": "esta es la comida de gato numero 7",
        "tipo": "gato",
        "precio": 90,
        "img": "../img/articulos/gato/comida_gato-7.jpg"
        
    },
    {
        "id": 15,
        "nombre": "Comida Gato 8",
        "descripcion": "esta es la comida de gato numero 8",
        "tipo": "gato",
        "precio": 210,
        "img": "../img/articulos/gato/comida_gato-8.jpg"
        
    },
    {
        "id": 16,
        "nombre": "Comida Ave 1",
        "descripcion": "esta es la comida de ave numero 1",
        "tipo": "ave",
        "precio": 60,
        "img": "../img/articulos/ave/comida_ave-1.jpg"
    },
    {
        "nombre": "Comida Ave 2",
        "id": 17,
        "descripcion": "esta es la comida de ave numero 2",
        "tipo": "ave",
        "precio": 100,
        "img": "../img/articulos/ave/comida_ave-2.jpg"
        
    },
    {
        "id": 18,
        "nombre": "Comida Ave 3",
        "descripcion": "esta es la comida de ave numero 3",
        "tipo": "ave",
        "precio": 150,
        "img": "../img/articulos/ave/comida_ave-3.jpg"
        
    },
    {
        "id": 19,
        "nombre": "Comida Ave 4",
        "descripcion": "esta es la comida de ave numero 4",
        "tipo": "ave",
        "precio": 80,
        "img": "../img/articulos/ave/comida_ave-4.jpg"
        
    },
    {
        "id": 20,
        "nombre": "Comida Ave 5",
        "descripcion": "esta es la comida de ave numero 5",
        "tipo": "ave",
        "precio": 300,
        "img": "../img/articulos/ave/comida_ave-5.jpg"
        
    },
    {
        "id": 21,
        "nombre": "Comida Ave 6",
        "descripcion": "esta es la comida de ave numero 6",
        "tipo": "ave",
        "precio": 750,
        "img": "../img/articulos/ave/comida_ave-6.jpg"
        
    },
    {
        "id": 22,
        "nombre": "Comida Ave 7",
        "descripcion": "esta es la comida de ave numero 7",
        "tipo": "ave",
        "precio": 90,
        "img": "../img/articulos/ave/comida_ave-7.jpg"
        
    },
    {
        "id": 23,
        "nombre": "Comida Ave 8",
        "descripcion": "esta es la comida de ave numero 8",
        "tipo": "ave",
        "precio": 210,
        "img": "../img/articulos/ave/comida_ave-8.jpg"
        
    }
]


items.forEach(function(obj) {
    db.collection("items").add({
        id: obj.id,
        nombre: obj.nombre,
        descripcion: obj.descripcion,
        tipo: obj.tipo,
        precio: obj.precio,
        img: obj.img
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});