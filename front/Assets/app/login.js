

document.getElementById('boton_SignUp').addEventListener('click',(event) => {
    event.preventDefault();

    let usuarios;

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Por favor, complete todos los campos.");
        return;
    }

    const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios"));

    if (!usuariosGuardados || usuariosGuardados.length === 0) {
        usuarios = [
          { correoi: "samay@gmail.com", contrasenai: "grupo6" }
        ];
      } else {
        usuarios = usuariosGuardados;
      }

    const usuario = usuarios.find(usuario => usuario.correoi === email);

    if (!usuario) {
        alert("Correo electrónico no registrado.");
        return;
    }

    if (usuario.contrasenai !== password) {
        alert("Contraseña incorrecta.");
        return;
    }

    alert("Inicio de sesión exitoso");
});
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