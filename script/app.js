//*OnCLick
 let modal = document.getElementById("gallery-modal");
 let btns = document.querySelectorAll(".gallery-flex");
 var closeBtn = document.getElementById("close-btn");



 closeBtn.onclick = function() {
  modal.style.display = "none";
}

btns.forEach(btn => {

   btn.addEventListener('click', ()=> {
    modal.style.display = "flex";
   });

});

//*Modal inner

//* Array of pictures to use later, for main-picture and thumbnails.
const images = [
    {
      name: "pexels-chitokan-2087748.jpg",
    },
    {
      name: "pexels-los-muertos-crew-7613568.jpg",
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


//*  
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
  document
    .getElementById("main-image")
    .setAttribute("src", `./img/${images[0].name}`);
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
