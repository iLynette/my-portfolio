const menuAction = document.querySelectorAll('.navbar-mobile li');
const closeMenu = document.querySelector('#cross-sign');
const menuList = document.querySelector('.mobile-nav');
const mobileMenu = document.querySelector('.navbar-mobile');
const mobileNav = document.querySelector('.navbar-mobile');
const listMenu = Array.from(menuAction);
const mybutton = document.getElementById('myBtn');

function open() {
  mobileMenu.classList.remove('hidden');
}

menuList.addEventListener('click', open);

function close() {
  mobileNav.classList.add('hidden');
}
closeMenu.addEventListener('click', close);

listMenu.forEach((elem) => elem.addEventListener('click', close));

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
