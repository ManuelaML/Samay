var counter = 1;
      setInterval(function () {
        document.getElementById("radio" + counter).checked = true;
        counter++;
        if (counter > 5) {
          counter = 1;
        }
      }, 5000);

const toggleBtn = document.querySelector(".toggle_btn");
 const toggleBtnIcon = document.querySelector(".toggle_btn i");
 const dropDownMenu = document.querySelector(".dropdown_menu");

 toggleBtn.onclick = function (params) {
   dropDownMenu.classList.toggle("open");
   const isOpen = dropDownMenu.classList.contains("open");

   toggleBtnIcon.classList = isOpen
     ? "fa-solid fa-xmark"
     : "fa-solid fa-bars";
 };