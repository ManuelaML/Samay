
const productos = [
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



function actualizarHTMLProductos() {
    let elemento='';
    productos.forEach (producto => {
    
        elemento+= `
                    <div class="producto_hijo">
                        <h3 class="titulo">${producto.nombre}</h3>
                        <img class="imagen" src="${producto.imagen}">
                        <p class="texto">Precio por libra: $ ${producto.precioporlibra}</p>
                        <button>Comprar</button>
                    </div>
    
        `;
    });
    
    document.getElementById('contenedor_productos').innerHTML=elemento;
}  


actualizarHTMLProductos()



const nombreP=document.getElementById("nombreProducto");
const referencia=document.getElementById("referencia");
const precio=document.getElementById("precio");
const cantidad=document.getElementById("cantidad");
const imagen=document.getElementById("imagenInput");



function validateFormA(){
    const formulario=document.getElementById("formulario");

    formulario.addEventListener('submit',(event)=>{
    event.preventDefault()

    
    const extension=imagen.value.split('.').pop();

    const permitidas=['jpg','pdf','png'];
   
    if (!permitidas.includes(extension)) {
        alert("el archivo no es permitido");
    }

    if(nombreP.value.trim()===''){
        alert ("El campo del nombre es obligatorio");
        return false
    }

    const nombrePermitido = /^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ\s]+$/;
    if (!nombrePermitido.test(nombreP.value.trim())) {
      alert("El nombre del producto solo puede contener letras, números, ñ, Ñ, acentos y espacios.");
      return false;
    }

    
    for (const producto of productos) {
    if (producto.nombre === nombreP.value.trim()) {
      alert("El nombre ya existe. Ingresa un nombre único.");
      return false;
    }
  }

    if (referencia.value.trim()===''){
        alert ("El campo de referencia es obligatorio");
        return false;
    }
    
    for (const producto of productos) {
    if (producto.id === referencia.value.trim()) {
      alert("La referencia ya existe. Ingresa una referencia única.");
      return false;
    }
  }
  
    if(precio.value.trim()===''){
        alert ("El campo de precio es obligatorio");
        return false;
    }

    if(cantidad.value.trim()===''){
        alert ("El campo de cantidad es obligatorio");
        return false;
    }
    
    alert ("El formulario ha sido enviado correctamente")
    return true;
 })

}

validateFormA();



if (validateFormA()) {
  
  const nuevoProducto = {
    nombre:nombreP.value.trim() ,
    id:parseInt(referencia.value.trim()), 
    imagen: imagen.value.trim(),
    precioporlibra:parseInt(precio.value.trim()) ,
    cantidadStock: parseInt(cantidad.value.trim()) ,
  };

  
  productos.push(nuevoProducto);

  actualizarHTMLProductos()
  alert ('Producto agregado' );
}

function validateFormEl(){
  const eliminar=document.getElementById("btneliminar");

  eliminar.addEventListener('submit',(event)=>{
  event.preventDefault()
  if (nombreP.value.trim() === '' && referencia.value.trim() === '') {
    alert('Debes especificar el nombre o ID del producto para eliminarlo.');
    return false;
  }

  if (nombreP.value.trim() !== '') {
    const productoEncontrado = productos.find(producto => producto.nombre ===nombreP.value.trim() );
    if (productoEncontrado == null) {
      alert('El nombre del producto no es válido. No se encontró ningún producto con ese nombre.');
      return false;
      }
    }
  

  if (referencia.value.trim() !== '') {
    const productoEncontrado = productos.find(producto => producto.id == referencia.value.trim());
    if (productoEncontrado == null) {
      alert('El ID del producto no es válido. No se encontró ningún producto con ese ID.');
      return false;
    }
  }

  return true;

})
}

validateFormEl()

if (validateFormEl()) {
  let productoEncontrado;
  if (referencia.value.trim() !== '') {
    productoEncontrado = productos.find(producto => producto.id == referencia.value.trim());
  } else {
    productoEncontrado = productos.find(producto => producto.nombre === nombreP.value.trim());
  }

  const indiceProducto = productos.indexOf(productoEncontrado);
  if (indiceProducto !== -1) {
    productos.splice(indiceProducto, 1);
    actualizarHTMLProductos()
    alert('Producto eliminado correctamente.');
  }

}

function validateFormEd() {
  const editar=document.getElementById("btneditar");

  editar.addEventListener('submit',(event)=>{
  if (referencia.value.trim() === '') {
    alert('El ID del producto no puede estar vacío.');
    return false;
  }

  const camposLlenos = [nombreP.value.trim(), imagen.value.trim(), cantidad.value.trim(), precio.value.trim()].filter(campo => campo !== '');
  if (camposLlenos.length === 0) {
    alert('Debes especificar al menos un campo para editar.');
    return false;
  }

  return true;

})
}

validateFormEd()

if (validateFormEl()) {
  const productoEncontrado = productos.find(producto => producto.id == referencia.value.trim());
  if (productoEncontrado == null) {
    alert('El ID del producto no es válido. No se encontró ningún producto con ese ID.');
    }
  else{  

  if (nombreP.value.trim() !== '') {
    productoEncontrado.nombre =nombreP.value.trim() ;
  }

  if (imagen.value.trim() !== '') {
    productoEncontrado.imagen = imagen.value.trim();
  }

  if (cantidad.value.trim() !== '') {
    productoEncontrado.cantidadStock = parseInt(cantidad.value.trim()) ;
  }

  if (precio.value.trim() !== '') {
    productoEncontrado.precioporlibra = parseInt(precio.value.trim()) ;
  }
  
  actualizarHTMLProductos()
  alert('Producto editado correctamente.');

}

}


