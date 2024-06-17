
let productos = [
  {
    nombre: "Papa",
    id:1, 
    imagen: "./images/ImagenesProductos/papa.jpg",
    precioporlibra: 1300,
    cantidadStock: 231,
  },
  {
    nombre: "Aguacate",
    id:2, 
    imagen: "./images/ImagenesProductos/aguacate.jpg",
    precioporlibra: 4389,
    cantidadStock: 85,
  },
  {
    nombre: "Mango",
    id:3, 
    imagen: "./images/ImagenesProductos/mango.jpg",
    precioporlibra: 3464,
    cantidadStock: 152,
  },
  {
    nombre: "Fresa",
    id:4, 
    imagen: "./images/ImagenesProductos/fresa.jpg",
    precioporlibra: 6150,
    cantidadStock: 173,
  },
  {
    nombre: "Lechuga",
    id:5, 
    imagen: "./images/ImagenesProductos/lechuga.jpg",
    precioporlibra: 3490,
    cantidadStock: 267,
  },
  {
    nombre: "Mandarina",
    id:6, 
    imagen: "./images/ImagenesProductos/mandarina.jpg",
    precioporlibra: 4990,
    cantidadStock: 234,
  },
  {
    nombre: "Piña",
    id:7, 
    imagen: "./images/ImagenesProductos/piña.jpg",
    precioporlibra: 3470,
    cantidadStock: 176,
  },
  {
    nombre: "Guanábana",
    id:8, 
    imagen: "./images/ImagenesProductos/guanaba.jpg",
    precioporlibra: 3867,
    cantidadStock: 150,
    descripcion: ""
  },
  {
    nombre: "Banano",
    id:9, 
    imagen: "./images/ImagenesProductos/banana.jpg",
    precioporlibra: 1695,
    cantidadStock: 340,
  },
  {
    nombre: "Mora",
    id:10, 
    imagen: "./images/ImagenesProductos/mora.jpg",
    precioporlibra: 6300,
    cantidadStock: 200,
  }
];

const productosGuardados= JSON.parse(localStorage.getItem("productos"));

if (productosGuardados){
  productos=productosGuardados;
}

const contenedorProductos =document.getElementById('contenedor_productos');

function actualizarHTMLProductos(contenedorHTML) {
    let elemento='';
    productos.forEach (producto => {
    
        elemento+= `
                    <div class="producto_hijo">
                        <h3 class="titulo">${producto.nombre}</h3>
                        <img class="imagen" src="${producto.imagen}">
                        <p class="texto">Precio por libra: $ ${producto.precioporlibra}</p>
                        <button>Agregar</button>
                    </div>
    
        `;
        contenedorHTML.innerHTML=elemento;
    });
    
  
}  


actualizarHTMLProductos(contenedorProductos)