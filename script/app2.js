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
// Variables
const cardModalWrapper = document.querySelector(".card-modal-wrapper");
const cardModal = document.querySelector(".card-modal");
const modalCross = document.querySelector("#modal-close");
const imgContent = document.querySelector("#img-wrapper");
const infoContent = document.querySelector("#info-wrapper");
// Staff information
const staff = [
    {
        name: "Name1",
        role: "Chef",
        img: "s1.jpg",
        info() {
            return `This is information about ${this.name}, the ${this.role}`;
        },
    },
    {
        name: "Name2",
        role: "Head-Chef",
        img: "s2ny.jpeg",
        info() {
            return `This is information about ${this.name}, the ${this.role}`;
        },
    },
    {
        name: "Name3",
        role: "Chef",
        img: "s3ny.jpg",
        info() {
            return `This is information about ${this.name}, the ${this.role}`;
        },
    },
];

// Opens and puts in the correct information to the card-modal
const openCardModal = () => {
    const readMore = document.querySelectorAll(".card-text p");
    readMore.forEach((card, index) => {
        card.addEventListener("click", () => {
            cardModalWrapper.style.display = "flex";
            for (let i = 0; i < staff.length; i++) {
                if (index === i) {
                    imgContent.innerHTML = `<img class="modal-img" src="./img/${staff[i].img}" />`;
                    infoContent.innerHTML = `<h2>${
                        staff[i].role
                    }</h2><p>${staff[i].info()}</p>`;
                }
            }
        });
    });
};

// Closes the card modal when the cross is clicked
const closeCardModal = (e) => {
    if (e.target !== e.currentTarget) {
        return;
    }
    if (cardModalWrapper.style.display == "flex") {
        cardModalWrapper.style.display = "none";
    } else {
        cardModalWrapper.style.display = "flex";
    }
};

// Making sure the website is loaded before any events are executed
window.addEventListener("load", () => {
    // Cross onClick event (closes it)
    modalCross.addEventListener("click", closeCardModal);
    cardModalWrapper.addEventListener("click", closeCardModal);
    // Calling the function that opens the card-modal
    openCardModal();
});
