const menuBtn = document.getElementById('menu-btn')
const navbar = document.querySelector(".navbar");

const menuButton = function () {
    menuBtn.classList.toggle('fa-times')
    navbar.classList.toggle('active')
}

menuBtn.addEventListener('click', menuButton)