//*OnCLick
var modal = document.getElementById("gallery-modal");
var btn = document.getElementById("gallery-flex");
btn.onclick = function() {
  modal.style.display = "block";
}

//*Modal inner
const images = [
    {
      name: "pexels-chitokan-2087748.jpg",
    },
    {
      name: "pexels-los-muertos-crew-7613568.png",
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

  const setMainImage = (src) => {
    document.getElementById("image-container").setAttribute("src", src);
    setActiveThumbNail();
  };

  window.addEventListener("load", () => {
    document
      .getElementById("image-container")
      .setAttribute("src", `./img/${images[0].name}`);
    document.getElementById("image-container").innerHTML = images
      .map(
        (img) =>
          `<img src="./img/${img.name}" class="thumbnail" onclick="setMainImage(this.src)">`
      )
      .join("")});

