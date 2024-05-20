const burgerMenu = document.getElementById("menuHamburger");
const list = document.getElementById("menuList");

function showMenu() {
    list.classList.toggle("close");
}

burgerMenu.addEventListener('click', showMenu);

const cerrarBut = document.getElementById("cerrarButton");

cerrarBut.addEventListener('click', function () {
    list.classList.add("show");
}
);
