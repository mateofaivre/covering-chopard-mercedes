var heroPhone = document.querySelector('.hero__phone')
var menuJaune = document.querySelector('#menu')
const button = document.querySelector('.menu__button');
const menu = document.querySelector('.menu__body');
const close = document.querySelector('.menu__header button');
const overlay = document.querySelector('.menu__overlay');
var menuLinks = document.querySelectorAll('.menu__contact a')

function showMenu() {

  button.setAttribute('hidden', '');
  button.style.display="none"
  menu.removeAttribute('hidden');
  overlay.removeAttribute('hidden');
//   heroPhone.style.minWidth="300px"
  heroPhone.style.width="100%"

};

function hideMenu() {

  menu.setAttribute('hidden', '');  
  overlay.setAttribute('hidden', '');
  button.removeAttribute('hidden');
  button.style.display="table-cell"
//   heroPhone.style.minWidth="7rem"
//   heroPhone.style.width="7rem"

};
button.addEventListener('click', showMenu);
close.addEventListener('click', hideMenu);
menuLinks.forEach( link => {
    link.addEventListener('click', hideMenu)
})
overlay.addEventListener('click', hideMenu);
//-------------------------------------------------------------
