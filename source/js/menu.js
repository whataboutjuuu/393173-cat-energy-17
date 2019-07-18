var windowW = window.screen.width;
var menu = document.querySelector(".main-menu");
var menuList = document.querySelector(".main-menu__list");
var menuButton = document.querySelector(".main-menu__toggle");

if (windowW < 1024) {

  var onButtonClick = function () {
    if (!menu.classList.contains('main-menu--shown')) {
      menu.classList.add('main-menu--shown');
    } else {
      menu.classList.remove('main-menu--shown');
    }
  }

  menuButton.addEventListener('click', onButtonClick);
}