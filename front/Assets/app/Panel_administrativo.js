function validateForm(){
    const nombreP=document.getElementById("nombreProducto");
    const referencia=document.getElementById("referencia");
    const precio=document.getElementById("precio");
    const cantidad=document.getElementById("cantidad");
    const formulario=document.getElementById("formulario");

    formulario.addEventListener('submit',(event)=>{
    event.preventDefault()

    const imagen=document.getElementById("imagenInput");
    const extension=imagen.value.split('.').pop();

    const permitidas=['jpg','pdf','png'];
   
    if (!permitidas.includes(extension)) {
        alert("el archivo no es permitido");
    }

    if(nombreP.value.trim()===''){
        alert ("El campo del nombre es obligatorio");
        return false
    }
    if (referencia.value.trim()===''){
        alert ("El campo de referencia es obligatorio");
        return false;
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
validateForm();


