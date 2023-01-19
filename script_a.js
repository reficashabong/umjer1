const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]
const hamburger = document.querySelector(".toggle-button");
const navMenu = document.querySelector(".nav-menu");
//const navLink = document.querySelectorAll(".nav-link");
toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});
//navLink.forEach(n => n.addEventListener("click", closeMenu));

/* mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}*/