var menu = document.querySelector(".main-menu");
var menuList = document.querySelector(".main-menu__list");
var menuButton = document.querySelector(".main-menu__toggle");

menu.classList.remove('main-menu--nojs');

var onButtonClick = function () {
  if (menu.classList.contains('main-menu--hidden')) {
    menu.classList.remove('main-menu--hidden');
    menu.classList.add('main-menu--shown');
  } else {
    menu.classList.add('main-menu--hidden');
    menu.classList.remove('main-menu--shown');
  }
}

menuButton.addEventListener('click', onButtonClick);
