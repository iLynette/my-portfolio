const menuAction = document.querySelectorAll(".navbar-mobile li");
let listMenu = Array.from(menuAction)

function open() {
    const mobileMenu = document.querySelector(".navbar-mobile");
    mobileMenu.classList.remove("hidden");
}

const menuList = document.querySelector(".mobile-nav");
menuList.addEventListener("click", open);

const closeMenu = document.querySelector("#cross-sign");


function close() {
    const mobileNav = document.querySelector(".navbar-mobile");
    mobileNav.classList.add("hidden")
}
closeMenu.addEventListener("click", close)

listMenu.forEach((elem) => elem.addEventListener("click", close))
