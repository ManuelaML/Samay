let usuarios=[
    {
        correoi:"samay@gmail.com",
        contrasenai: "grupo6"
    }
]
 
const usuariosGuardados= JSON.parse(localStorage.getItem("usuarios"));
 
if (usuariosGuardados){
    usuarios=usuariosGuardados;
  }
 
  document.getElementById('boton_SignUp').addEventListener('click',(event) => {
    event.preventDefault();
 
    const correo =document.getElementById('email').value.trim();
    const contrasena=document.getElementById('password').value.trim();
    const confirmarPassword = document.getElementById('confirmar_contraseña').value.trim();
 
    if (contrasena!==confirmarPassword){
        Swal.fire({
            icon: "error",
            titulo:"¡ups!",
            text:"la contraseña no coincide",
            footer:'<a href:"#" >vuelve a intertarlo</a>',
            customClass:{  
                confirmButton:'Swal-confirm'
            }
        });
        return;
    }
 
    if (!validarCorreo(correo)){
        alert("Formato de correo inválido")
        return;
    }
 
    for (const usuario of usuarios) {
        if (usuario.correoi === correo) {
          alert("Este correo ya se encuentra registrado.");
          return;
        }
    }
 
    const nuevoUsuario = {
            correoi: correo,
            contrasenai: contrasena,
        };
 
        usuarios.push(nuevoUsuario);
        localStorage.setItem("usuarios", JSON.stringify(usuarios));
        alert('Usuario registrado');
        return;
 
    });
 
 
function validarCorreo(email) {
    const validacionCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return validacionCorreo.test(email);
}
 
function toggleContraseña(campopas) {
    const campoContraseña = document.getElementById(campopas);
    const icon = campoContraseña.nextElementSibling.querySelector('i');
    if (campoContraseña.type === "password") {
        campoContraseña.type = "text";
        icon.classList.remove("fa-eye");
        icon.classList.add("fa-eye-slash");
    } else {
        campoContraseña.type = "password";
        icon.classList.remove("fa-eye-slash");
        icon.classList.add("fa-eye");
    }
}