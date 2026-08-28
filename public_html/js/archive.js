/*Highlight photos*/

const lightbox = document.querySelector("#lightbox");

const lightboxImage =
    document.querySelector("#lightbox-image");

const closeButton =
    document.querySelector(".lightbox-close");

const galleryImages =
    document.querySelectorAll(
        ".production-main-image img, .gallery-image img"
    );


/* Open image */

galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightbox.classList.add("active");
        document.body.style.overflow = "hidden";
    });
});


/* Close when clicking the dark background */

lightbox.addEventListener("click", (event) => {
    if(event.target === lightbox){
        closeLightbox();
    }

});


/* Close button */

closeButton.addEventListener("click", () => {
    closeLightbox();
});


/* Escape key */

document.addEventListener("keydown", (event) => {
    if(event.key === "Escape"){
        closeLightbox();
    }

});


function closeLightbox(){
    lightbox.classList.remove("active");
    document.body.style.overflow = "";

}