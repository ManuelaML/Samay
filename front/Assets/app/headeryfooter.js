const header = document.querySelector('header');
const footer = document.querySelector('footer');


header.innerHTML = `
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
<nav>
<div class="contenedor">
<div id="barra_nav" class="nav-bar ">
      <a href="#" id="logo">SAMAY</a>
     <div class="texto_menu">
      <ul>
        <li><a href="inicio.html">INICIO</a></li>
        <li><a href="Productos.html">PRODUCTOS</a></li>
        <li><a href="#">BLOG</a></li>
        <li><a href="contacto.html">CONTACTO</a></li>
      </ul>     
    </div>
      <div class="icon">
        <a href="#"><i class="fa-solid fa-user iconos_header" style="color: #ffffff;"></i></a>
        <a href="#"><i class="fa-solid fa-cart-shopping iconos_header" style="color: #ffffff;"></i></a>
        <a href="javascript:void(0);" id="menuHamburger"><i class="fa-solid fa-bars iconos_header" style="color: #ffffff;"></i></a>
      </div>
      <ul class="menuBurger close" id="menuList">
        <li><a href="inicio.html" class="menuItem" id="inicio">Inicio</a></li>
        <li ><a href="#" class="menuItem ">Nosotros</a></li>
        <li ><a href="Productos.html" class="menuItem ">Productos</a></li>
        <li ><a href="#" class="menuItem ">Blog</a></li>
        <li ><a href="Productos.html" class="menuItem ">Contactos</a></li>
      </ul>
    </div>
    </div>
</nav>    
`;

footer.innerHTML = `
<div class="footerTest">
<div class="contenedor-fotter">
<img src="./images/logo_samay.jpg" alt="logo samay">
<ul>
  <li><a href="Registro_Usuario.html">Inicio</a></li>
  <li><a href="#">Nosotros</a></li>
  <li><a href="Productos.html">Productos</a></li>
  <li><a href="#">Blog</a></li>
  <li><a href="Productos.html">Contacto</a></li>
</ul>

<div class="contenedor-iconos">
  <a href="#"><i class="fa-brands fa-facebook fa-lg iconos" style="color: #000000;"></i></a>
  <a href="#"><i class="fa-brands fa-instagram fa-lg iconos" style="color: #000000;"></i></a>
  <a href="#"><i class="fa-brands fa-whatsapp fa-lg iconos" style="color: #000000;"></i></a>
  <a href="#"><i class="fa-solid fa-location-dot fa-lg iconos" style="color: #000000;"></i></a>
</div>
</div>
<div class="Copyright-j">
  <p id="derechos_reservados">Copyright © 2024 Todos los derechos reservados.</p>
  <div class="links_footer">
  <a href="#"><p class="texto_copy"><b>Legal |</b></p></a>
  <a href="#"><p class="texto_copy"><b> Privacidad |</b></p></a>
  <a href="Productos.html"><p class="texto_copy"><b> Productos</b></p></a>
  </div>
</div>
</div> 
`;