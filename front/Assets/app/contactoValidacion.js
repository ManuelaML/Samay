document.getElementById('telefono').addEventListener('input', function (event) {
  if (event.target.value.length > 10)
    event.target.value = event.target.value.slice(0, 10);
  event.target.value = event.target.value.replace(
    /[a-zA-Z@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+$/,
    ''
  );
});
document.querySelector('.form').addEventListener('submit', function (event) {
  var nombre = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
    event.preventDefault();
    alert('Formato de email incorrecto');
  }

  var telefono = document.getElementById('telefono').value;
  if (telefono.length < 10) {
    event.preventDefault();
    alert('Agregar telefono completo.');
  }
  var mensaje = document.getElementById('mensaje').value;
  console.log('Nombre:', nombre);
  console.log('Correo Electrónico:', email);
  console.log('Teléfono:', telefono);
  console.log('Mensaje: ', mensaje);
});
