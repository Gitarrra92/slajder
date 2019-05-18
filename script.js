const prev = document.querySelector(".prevBtn");
const next = document.querySelector(".nextBtn");
const images = document.querySelector(".images");

let counter = 0;

prev.addEventListener("click", prevSlider);
next.addEventListener("click", nextSlider);

function prevSlider() {

}

function nextSlider() {
counter++;
images.style.backgroundImage = `url(img/bcg-${counter}.jpeg)`

}