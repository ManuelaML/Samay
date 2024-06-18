let usuarios = [
    {
        correoi:"samay@gmail.com",
        contrasenai: "grupo6"
    }
];

const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios"));

if (usuariosGuardados) {
    usuarios = usuariosGuardados;
}

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!email || !password) {
        alert("Por favor, complete todos los campos.");
        return;
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