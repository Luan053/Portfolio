const OpenMenu = () => {
  const menu = document.querySelector(".menu");
  const NavMenu = document.querySelector(".nav-menu");

  const openAndClose = () => {
    menu.classList.toggle("ativo");
    NavMenu.classList.toggle("ativo");
  };

  menu.addEventListener("click", openAndClose);
  NavMenu.addEventListener("click", openAndClose);
};

OpenMenu();
