// Responsive Nav-Bar
// Variables
const burgerButton = document.querySelector("#burger");
const navbar = document.querySelector("#nav-bar");
const links = document.querySelectorAll(".nav-link");
let menuOpen = false;

// Function that puts a "click"-event on the burger-button
const toggleBurgerMenu = () => {
        if (!menuOpen) {
            navbar.style.right = "0";
            menuOpen = true;
        } else {
            navbar.style.right = "-50%";
            menuOpen = false;
        }
}

// Function that closes the menu when any link is clicked
const closeOnLinkClick = () => {
    links.forEach(link => {
        link.addEventListener("click", toggleBurgerMenu);
    })
}

// Making sure the website has loaded before any events can happen
window.addEventListener("load", () => {
    // adding the event on burger-button to toggle the menu-function
    burgerButton.addEventListener("click", toggleBurgerMenu);
    // calling the function that closes the menu on link-click
    closeOnLinkClick();
})