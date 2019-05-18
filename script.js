const prev = document.querySelector(".prevBtn");
const next = document.querySelector(".nextBtn");
const images = document.querySelector(".images");

let counter = 0;

prev.addEventListener("click", prevSlider);
next.addEventListener("click", nextSlider);

function prevSlider() {
    if(counter == 0) {
        counter = 5;
    }
    counter --;
    images.style.backgroundImage = `url(img/bcg-${counter}.jpg)`

}

function nextSlider() {
    if(counter == 4){
        counter = -1;
    }
counter++;
images.style.backgroundImage = `url(img/bcg-${counter}.jpg)`

}