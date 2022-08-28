let menuButton = document.querySelector(".menu-button__container")
let menu = document.getElementById("nav")
menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("hidden")
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
})