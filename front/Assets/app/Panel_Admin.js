document.addEventListener('DOMContentLoaded', (event) => {
    
    const productosGuardados=JSON.parse(localStorage.getItem("productos"))
    
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

      if (productosGuardados){
        productos=productosGuardados;
    }


    const nombreP = document.getElementById("nombreProducto");
    const referencia = document.getElementById("referencia");
    const precio = document.getElementById("precio");
    const cantidad = document.getElementById("cantidad");
    const imagen = document.getElementById("imagenInput");
    
    const permitidas=['jpg','pdf','png'];

    document.getElementById("btnagregar").addEventListener('click', (event) => {
        event.preventDefault();
        if (nombreP.value.trim() === '' || referencia.value.trim() === '' || precio.value.trim() === '' || cantidad.value.trim() === '') {
            alert('Todos los campos son obligatorios');
            return;
        }

        
        for (const producto of productos) {
            if (producto.id == referencia.value.trim()) {
              alert("La referencia ya existe. Ingresa una referencia única.");
              return;
            }
            if (producto.nombre === nombreP.value.trim()) {
                alert("El nombre ya existe. Ingresa un nombre único.");
                return;
              }
          }

        const extension=imagen.value.split('.').pop();
        if (!permitidas.includes(extension)) {
              alert("Extensión del archivo incorrecta");
              return;
          } 

        const nuevoProducto = {
            nombre: nombreP.value.trim(),
            id: parseInt(referencia.value.trim()),
            imagen: imagen.value.trim(),
            precioporlibra: parseInt(precio.value.trim()),
            cantidadStock: parseInt(cantidad.value.trim())
        };

        productos.push(nuevoProducto);
        localStorage.setItem("productos", JSON.stringify(productos))
        alert('Producto agregado');
        
    });

    document.getElementById("btneliminar").addEventListener('click', (event) => {
        event.preventDefault();
        if (referencia.value.trim() === '') {
            alert('Referencia del producto es obligatoria para eliminar');
            return;
        }

        const productoEncontrado = productos.find(producto => producto.id == referencia.value.trim());
        if (productoEncontrado !== undefined) {
            const indice = productos.indexOf(productoEncontrado);
            productos.splice(indice, 1);
            localStorage.setItem("productos", JSON.stringify(productos))
            alert('Producto eliminado');
        } else {
            alert('Producto no encontrado');
        }
    });

    document.getElementById("btneditar").addEventListener('click', (event) => {
        event.preventDefault();
        if (referencia.value.trim() === '') {
            alert('Referencia del producto es obligatoria para editar');
            return;
        }
        if (nombreP.value.trim() === '' && imagen.value.trim() === '' && precio.value.trim() === '' && cantidad.value.trim() === ''){
            alert('Debe especificar al menos un campo a modificar');
            return;
        }

        const productoEncontrado = productos.find(producto => producto.id == referencia.value.trim());
        if (productoEncontrado !== undefined ) {
            if (nombreP.value.trim() !== '') {
                productoEncontrado.nombre = nombreP.value.trim();
            }
            if (imagen.value.trim() !== '') {
                const extension=imagen.value.split('.').pop();
                if (!permitidas.includes(extension)) {
                    alert("Extensión del archivo incorrecta");
                    return;
                } else{
                productoEncontrado.imagen = imagen.value.trim();
                }
            }
            if (precio.value.trim() !== '') {
                productoEncontrado.precioporlibra = parseInt(precio.value.trim());
            }
            if (cantidad.value.trim() !== '') {
                productoEncontrado.cantidadStock = parseInt(cantidad.value.trim());
            }
            console.log(productos)
            localStorage.setItem("productos", JSON.stringify(productos))
            alert('Producto editado');
        } else {
            alert('Producto no encontrado');
        }
    });
});