// Image slider
const images = [
    "../img/fake-asset-photos/Macbeth-placeholder.jpg",
    "../img/fake-asset-photos/macbeth-placeholder2.jpg",
    "../img/fake-asset-photos/macbeth-placeholder3.jpg",
    "../img/fake-asset-photos/macbeth-placeholder4.jpg",
    "../img/fake-asset-photos/macbeth-placeholder4.jpeg"
];

const track = document.querySelector(".carousel-track");
const dotsContainer = document.querySelector(".dots");

let index = 0;

images.forEach((src, i) => {

    const slide = document.createElement("div");
    slide.classList.add("slide");

    const img = document.createElement("img");
    img.src = src;

    slide.appendChild(img);
    track.appendChild(slide);

    const dot = document.createElement("span");
    dot.classList.add("dot");

    dot.addEventListener("click", () => {
        index = i;
        updateCarousel();
    });

    dotsContainer.appendChild(dot);
});

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function updateCarousel(){

    const slideWidth = 330; // 300 + margins
    const offset = (track.parentElement.offsetWidth / 2) - (slideWidth / 2);

    track.style.transform = `translateX(${offset - index * slideWidth}px)`;

    slides.forEach(s => {
        s.classList.remove("active", "left", "right");
    });

    const prevIndex = (index - 1 + slides.length) % slides.length;
    const nextIndex = (index + 1) % slides.length;

    slides[index].classList.add("active");
    slides[prevIndex].classList.add("left");
    slides[nextIndex].classList.add("right");

    dots.forEach(d => d.classList.remove("active"));
    dots[index].classList.add("active");
}

document.querySelector(".next").addEventListener("click", () => {
    index = (index + 1) % slides.length;
    updateCarousel();
});

document.querySelector(".prev").addEventListener("click", () => {
    index = (index - 1 + slides.length) % slides.length;
    updateCarousel();
});

setInterval(() => {
    index = (index + 1) % slides.length;
    updateCarousel();
}, 4000);

updateCarousel();