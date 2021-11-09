//OnCLick 
const modal = document.getElementById("gallery-modal");
const btns = document.querySelectorAll(".gallery-flex");
const closeBtn = document.getElementById("close-btn");

//Modal inner

// Array of pictures to use later, for main-picture and thumbnails.
const images = [
    {
        name: "pexels-los-muertos-crew-7613568.jpg",
    },
    {
        name: "pexels-chitokan-2087748.jpg",
    },
    {
        name: "pexels-los-muertos-crew-7772198.jpg",
    },
    {
        name: "pexels-los-muertos-crew-7772203.jpg",
    },
    {
        name: "pexels-los-muertos-crew-8448323.jpg",
    },
    {
        name: "pexels-sabel-blanco-3073970.jpg",
    },
];
//Function to close (display none)
closeBtn.onclick = function () {
    modal.style.display = "none";
};

modal.onclick = function (closing) {
    if (closing.target == modal) {
        modal.style.display = "none";
    }
};

btns.forEach((img, index) => {
    img.addEventListener("click", () => {
        modal.style.display = "flex";
        document
            .querySelector("#main-image")
            .setAttribute("src", `./img/${images[index].name}`);
        setActiveThumbNail();
    });
});


const setMainImage = (src) => {
    document.getElementById("main-image").setAttribute("src", src);
    setActiveThumbNail();
};

const setActiveThumbNail = () => {
    const thumbs = document.getElementsByClassName("thumbnail");
    for (let i = 0; i < thumbs.length; i++) {
        if (thumbs[i].src === document.getElementById("main-image").src) {
            thumbs[i].style.border = "3px solid #ff8303";
        } else {
            thumbs[i].style.border = "0px";
        }
    }
};

const prevImage = () => {
    const thumbs = document.getElementsByClassName("thumbnail");
    for (let i = 0; i < thumbs.length; i++) {
        if (
            thumbs[i].src === document.getElementById("main-image").src &&
            i !== 0
        ) {
            document
                .getElementById("main-image")
                .setAttribute("src", thumbs[(i -= 1)].src);
            setActiveThumbNail();
        }
    }
};

const nextImage = () => {
    const thumbs = document.getElementsByClassName("thumbnail");
    for (let i = 0; i < thumbs.length; i++) {
        if (
            thumbs[i].src === document.getElementById("main-image").src &&
            i !== thumbs.length - 1
        ) {
            document
                .getElementById("main-image")
                .setAttribute("src", thumbs[(i += 1)].src);
            setActiveThumbNail();
        }
    }
};

window.addEventListener("load", () => {
    document.getElementById("thumbnails-wrapper").innerHTML = images
        .map(
            (img) =>
                `<img src="./img/${img.name}" class="thumbnail" onclick="setMainImage(this.src)">`
        )
        .join("");
    setActiveThumbNail();
    document.getElementById("prev-btn").addEventListener("click", prevImage);
    document.getElementById("next-btn").addEventListener("click", nextImage);
});

// Responsive Nav-Bar code
// Variables
const burgerButton = document.querySelector("#burger");
const navbar = document.querySelector("#nav-bar");
const links = document.querySelectorAll(".nav-link");
let menuOpen = false;

// Function that opens and closes the navigation menu
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
    burgerButton.addEventListener("click", toggleBurgerMenu); // adding the event on burger-button to toggle the menu-function
    closeOnLinkClick(); // calling the function that closes the menu on link-click
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
        img: "skull1.png",
        info() {
            return `This is information about ${this.name}, the ${this.role}`;
        },
    },
    {
        name: "Name2",
        role: "Head-Chef",
        img: "skull2.png",
        info() {
            return `This is information about ${this.name}, the ${this.role}`;
        },
    },
    {
        name: "Name3",
        role: "Chef",
        img: "skull3.png",
        info() {
            return `This is information about ${this.name}, the ${this.role}`;
        },
    },
];

// Opens and puts in the correct information to the card-modal
const openCardModal = () => {
    const readMore = document.querySelectorAll(".card-text p");
    // putting a click-event on each card that opens up a modal with more information
    readMore.forEach((card, index) => {
        card.addEventListener("click", () => {
            cardModalWrapper.style.display = "flex";
            // looping through the staff-array and looking if the card-index and the array-index matches
            // if so it will generate the correct img, role and information on the modal
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
    // if what I click on matches what this event this function is put on, it will close the modal
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
    modalCross.addEventListener("click", closeCardModal); // cross onClick event (closes the modal)
    cardModalWrapper.addEventListener("click", closeCardModal); // modal-wrapper onClick event (closes the modal)
    openCardModal(); // calling the function that opens the card-modal
});