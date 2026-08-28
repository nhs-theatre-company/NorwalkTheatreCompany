const events = [

    {
        title: "Drama Club",
        date: "September 2026",
        image: "../img/events-page/drama-club.png",
        description:
            "Our kick off to the new school year, " + 
            "it sets up our agenda, and fall play!"
    },

    {
        title: "Macbeth Auditions",
        date: "September 2026",
        image: "../img/events-page/macbeth-poster.png",
        description:
            "Our spring musical brought together performers, "
            + "designers, musicians, and crew for another "
            + "memorable production."
    },

    {
        title: "Orientation",
        date: "August 2026",
        image: "../img/events-page/orientation.png",
        description:
            "Inviting incoming freshman to see "
            + "what Norwalk Theatre Co is about!"
    },

    {
        title: "Summer Dance",
        date: "July 2026",
        image: "../img/events-page/summer-dance.png",
        description:
            "Electric dancing once a week "
            + "in a variety of styles from 2 people!"
    }

];


const eventContainer =
    document.querySelector("#event-container");


events.forEach((event, index) => {

    const card = document.createElement("article");

    card.classList.add(
        "event-card",
        "fade-in"
    );


    /*makes it look pinned up*/

    const pin = document.createElement("div");

    pin.classList.add("event-pin");


    /*the posters*/
    const image = document.createElement("img");

    image.classList.add("event-poster");

    image.src = event.image;

    image.alt = event.title;


    /*the caption*/

    const caption = document.createElement("div");
    caption.classList.add("event-caption");


    const date = document.createElement("p");
    date.classList.add("event-date");
    date.textContent = event.date;


    const title = document.createElement("h3");
    title.textContent = event.title;


    const description = document.createElement("p");
    description.textContent = event.description;


    caption.appendChild(date);
    caption.appendChild(title);
    caption.appendChild(description);


    /*put it all together!!!*/

    card.appendChild(pin);
    card.appendChild(image);
    card.appendChild(caption);
    eventContainer.appendChild(card);


    /*lightbox*/

    card.addEventListener("click", () => {

        openLightbox(event);

    });

});


/*lightbox setup*/

const lightbox =
    document.querySelector("#event-lightbox");

const lightboxImage =
    document.querySelector("#lightbox-image");

const lightboxTitle =
    document.querySelector("#lightbox-title");

const lightboxDate =
    document.querySelector("#lightbox-date");

const lightboxDescription =
    document.querySelector("#lightbox-description");

const closeButton =
    document.querySelector("#lightbox-close");


function openLightbox(event){

    lightboxImage.src = event.image;

    lightboxImage.alt = event.title;

    lightboxTitle.textContent = event.title;

    lightboxDate.textContent = event.date;

    lightboxDescription.textContent =
        event.description;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}


/*When the user closes the lightbox*/

function closeLightbox(){

    lightbox.classList.remove("active");

    document.body.style.overflow = "";

}


closeButton.addEventListener(
    "click",
    closeLightbox
);


lightbox.addEventListener("click", event => {

    if(event.target === lightbox){

        closeLightbox();

    }

});

document.addEventListener("keydown", event => {

    if(event.key === "Escape"){

        closeLightbox();

    }

});