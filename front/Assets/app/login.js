const usuariosGuardados=JSON.parse(localStorage.getItem("usuarios"))

let usuarios=[
    {
        correoi: "samay@gmail.com",
        contrasenai: "Grupo6"
    }
]

if (usuariosGuardados){
    usuarios=usuariosGuardados;
}

const loginForm = document.getElementById("loginForm");
loginForm.addEventListener("submit", function(event) {
    event.preventDefault();

    
    const password = document.getElementById("password").value.trim();
    const email = document.getElementById("email").value.trim();

    const usuario = usuarios.find(usuario => usuario.correoi === email);

    if ( !password || !email) {
        alert("Por favor, complete todos los campos.")
        return;
    }
    
    
    if (!usuario) {
        alert("Correo electrónico no registrado");
        return;
    }

    
    if (usuario.contrasenai !== password) {
        alert("Contraseña incorrecta");
        return;
    }

    alert("Inicio de sesión exitoso");
    return;
    

});

