const menuAction = document.querySelectorAll(".navbar-mobile li");
const closeMenu = document.querySelector("#cross-sign");
const menuList = document.querySelector(".mobile-nav");
const mobileMenu = document.querySelector(".navbar-mobile");
const mobileNav = document.querySelector(".navbar-mobile");
let listMenu = Array.from(menuAction)

function open() {
    mobileMenu.classList.remove("hidden");
}

menuList.addEventListener("click", open);


function close() {
    mobileNav.classList.add("hidden")
}
closeMenu.addEventListener("click", close)

listMenu.forEach((elem) => elem.addEventListener("click", close));;
