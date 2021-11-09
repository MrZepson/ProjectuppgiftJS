// functions stated futher down
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
//Onclick Function to close (display none) on X button
closeBtn.onclick = function () {
    modal.style.display = "none";
};
//Onclick function to close (display none) on outside of gallery modal
modal.onclick = function (closing) {
    if (closing.target == modal) {
        modal.style.display = "none";
    }
};

// Function that sets right picture when clicked on as main and open modal
btns.forEach((img, index) => {
// when clicked on display flex (get visible).     
    img.addEventListener("click", () => {
        modal.style.display = "flex";
//set main image src to ./img/ & the rest of the src is gets the same src as the picture with that clicked on.
        document 
            .querySelector("#main-image")
            .setAttribute("src", `./img/${images[index].name}`);
        setActiveThumbNail();
    });
});

// A arrow function to style the active Thumbnail
const setActiveThumbNail = () => {
// To make it posible to loop over the thumbnails we get the al the elements whit the class name thumbnail
    const thumbs = document.getElementsByClassName("thumbnail");
// The for loop checks that as long as i is lesser than the number of objects in the thumbs array and i will increase with 1 so the array dont continue to loop forever.  
    for (let i = 0; i < thumbs.length; i++) {
//if thums src are the same as main-image src- style border          
        if (thumbs[i].src === document.getElementById("main-image").src) {
            thumbs[i].style.border = "3px solid #ff8303";
//else dont style border            
        } else {
            thumbs[i].style.border = "0px";
        }
    }
};

//a arrow function to get the previous image in the thumbs array to show
const beforeBtn = () => {
    const thumbs = document.getElementsByClassName("thumbnail");
// a for loop that states that as long as i is lesser  than the number of objects in the thumbs array and i will increase with 1 so the array dont continue to loop forever.    
    for (let i = 0; i < thumbs.length; i++) {
/* if thumbs i src are the same as main-image get the main image and set src attrinute to the previous (-=1)
 src in the thumbs array and if i is less than 0 it dont do anything*/        
        if (
            thumbs[i].src === document.getElementById("main-image").src &&
            i !== 0
        ) {
            document
                .getElementById("main-image")
                .setAttribute("src", thumbs[(i -= 1)].src);
// And cal set active thumbnail to get the style on active thumbnail , the function is stated futher up.
                setActiveThumbNail();
        }
    }
};

// same as beforeBtn untill the if
const nextBtn = () => {
    const thumbs = document.getElementsByClassName("thumbnail");
    for (let i = 0; i < thumbs.length; i++) {
/* if thumbs i src are the same as main-imageget the main image and set src attrinute to the next (i +=1)
 src in the thumbs array and if i is greater than the numer of object in thums.length -1 (since the first index number is 0) and if so dont do anything  */
        if (
            thumbs[i].src === document.getElementById("main-image").src &&
            i !== thumbs.length - 1
        ) {
            document
                .getElementById("main-image") 
                .setAttribute("src", thumbs[(i += 1)].src);

// And call set active thumbnail to get the style on active thumbnail , the function is stated futher up.    
            setActiveThumbNail();
        }
    }
};

//check if the it has loaded an then with a arrow function to set and target thumbnails-wrapper
window.addEventListener("load", () => {
//target the thumbnail wrapper in html to fill it with the images in the images array    
    document.getElementById("thumbnails-wrapper").innerHTML = images
    /*.map iterate over the images array and makes a new array with the path (img map) and the img name in the array, so it becomes a array of the images.
 to get the css it has the class "thumbnail" and a onclick event thats explaind futher up and a argument (this.src) so we can use this src in the function */
        .map(
            (img) =>
                `<img src="./img/${img.name}" class="thumbnail" onclick="setMainImage(this.src)">`
        )
//To delete the commas that exist because its a arry, we use .join to make it a string instead of an array   
        .join("");
//To immediately style the active thumbnail, we cal the function setActiveThumnail that are set futher up
    setActiveThumbNail();
/*First get the element id from html prev-btm and next-btn and then using a eventlistener to "listen" afer a click
and when detecting a click run the beforeBtn or nextBtn funcion that ar set futher up*/
    document.getElementById("prev-btn").addEventListener("click", beforeBtn);
    document.getElementById("next-btn").addEventListener("click", nextBtn);
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