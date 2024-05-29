const header = document.querySelector('header');
const footer = document.querySelector('footer');


header.innerHTML = `
<nav class="nav-bar">
      <a href="#" id="logo">SAMAY</a>
     <div class="texto_menu">
      <ul >
        <li><a href="#">INICIO</a></li>
        <li><a href="#">PRODUCTOS</a></li>
        <li><a href="#">BLOG</a></li>
        <li><a href="#">CONTACTO</a></li>
      </ul>      
    </div>
      <div class="icon">
        <a href="#"><img src="./images/iconoUsuario.jpg" alt="usuario"></a>
        <a href="#"><img src="./images/carrito.jpg" alt="carrito"></a>
        <a href="javascript:void(0);" id="menuHamburger"><img src="./images/menuHamburger.jpg" alt="menu"></a>
      </div>
      <ul class="menuBurger close" id="menuList">
        <li><a href="#" class="menuItem" id="inicio">Inicio</a></li>
        <li ><a href="#" class="menuItem ">Nosotros</a></li>
        <li ><a href="#" class="menuItem ">Productos</a></li>
        <li ><a href="#" class="menuItem ">Blog</a></li>
        <li ><a href="#" class="menuItem ">Contactos</a></li>
      </ul>
    </nav>
`;

footer.innerHTML = `
<div class="contenedor-fotter">
<ul>
  <li><a href="#">Inicio</a></li>
  <li><a href="#">Nosotros</a></li>
  <li><a href="#">Productos</a></li>
  <li><a href="#">Blog</a></li>
  <li><a href="#">Contacto</a></li>
</ul>
<img src="./images/logo_samay.jpg" alt="">
<div class="contenedor-iconos">
  <i class="fa-brands fa-facebook fa-lg iconos" style="color: #000000;"></i>
  <i class="fa-brands fa-instagram fa-lg iconos" style="color: #000000;"></i>
  <i class="fa-brands fa-whatsapp fa-lg iconos" style="color: #000000;"></i>
  <i class="fa-solid fa-location-dot fa-lg iconos" style="color: #000000;"></i>
</div>
</div>
<div class="Copyright-j">
<p>Copyright © 2024 Todos los derechos reservados.</p>
<p><b>Legal | Privacidad | Productos</b></p>
</div>
`;