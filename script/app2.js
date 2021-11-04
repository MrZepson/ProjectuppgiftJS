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
};

// Function that closes the menu when any link is clicked
const closeOnLinkClick = () => {
    links.forEach((link) => {
        link.addEventListener("click", toggleBurgerMenu);
    });
};

// Making sure the website has loaded before any events can happen
window.addEventListener("load", () => {
    // adding the event on burger-button to toggle the menu-function
    burgerButton.addEventListener("click", toggleBurgerMenu);
    // calling the function that closes the menu on link-click
    closeOnLinkClick();
});

// Card modal code
/*
const closeServiceModal = () => {
    document.getElementById("service-modal-wrapper").style.display = "none";
};

const openServiceModal = () => {
    const cards = document.getElementsByClassName("service-card");
    for (let i = 0; i < cards.length; i++) {
        cards[i].addEventListener("click", () => {
            document.getElementById("service-modal-wrapper").style.display = "flex";
            for (let j = 0; j < services.length; j++) {
                if (i === j) {
                document.getElementById(
                "service-modal-content"
                ).innerHTML = `<h2>${services[j].name}</h2><p>${services[j].content}</p><img src="./media/img/${services[j].picture}">`;
                }
            }
        });
    }
};

window.addEventListener("load", openServiceModal);
*/

// Variables
const staff = [
    {
        name: "Name1",
        role: "Chef",
        info: `This is where the information for ${this.name}, ${this.role}`,
    },
    {
        name: "Name2",
        role: "Head-Chef",
        info: `This is where the information for ${this.name}, ${this.role}`,
    },
    {
        name: "Name3",
        role: "Chef",
        info: `This is where the information for ${this.name}, ${this.role}`,
    },
];
