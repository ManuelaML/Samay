document.addEventListener('DOMContentLoaded', (event) => {
 
  let vacia;
  const traerJSON = async () => {
    try {
      const response = await fetch("/Assets/app/productos.json");
      const {productos} = await response.json();
      let elemento = '';
      productos.forEach(producto => {
        elemento += `
                <div class="producto_hijo">
                <h3 class="titulo">${producto.nombre}</h3>
                <img class="imagen" src="${producto.imagen}">
                <p class="texto">Precio por libra: $ ${producto.precioporlibra}</p>
                <button>Agregar</button>
                </div>
                    `;
          });
      document.getElementById('contenedor_productos').innerHTML = elemento;
      
    } catch (error) {
      console.error("Error al traer el archivo JSON:", error);
      return; 
    }
  };

  

  traerJSON()
});


    