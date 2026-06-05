function showMessage() {

    let msg =
        document.getElementById("surprise");

    msg.style.display = "block";
}

function toggleMessage(id) {

    let box =
        document.getElementById(id);

    if(box.style.display === "block"){
        box.style.display = "none";
    }
    else{
        box.style.display = "block";
    }
}

function forgot(){

    document.getElementById(
        "forgotMessage"
    ).innerHTML =
    "Error 404: Akka forgetting you was never found ❤️";
}

function showGallery(){

    let gallery =
    document.getElementById(
        "galleryContainer"
    );

    gallery.style.display = "block";
}


const images = [
    "images/image00.jpeg",
    "images/image0.jpeg",
    "images/image1.jpeg",
    "images/image2.jpeg",
    "images/image3.jpeg",
    "images/image4.jpeg",
    "images/image5.jpeg",
    "images/image6.jpeg",
    "images/image7.jpeg",
    "images/image8.jpeg",
    "images/image9.jpeg",
    "images/image10.jpeg",
    "images/image11.jpeg",
    "images/image12.jpeg",
    "images/image13.jpeg",
    "images/image14.jpeg",
    "images/image15.jpeg",
    "images/image16.jpeg",
    "images/image17.jpeg",
    "images/image18.jpeg"
];


let currentIndex = 0;

function openLightbox(index){

    currentIndex = index;

    document
    .getElementById("lightbox")
    .style.display = "flex";

    document
    .getElementById("lightbox-img")
    .src = images[index];
}

function closeLightbox(){

    document
    .getElementById("lightbox")
    .style.display = "none";
}

function changeImage(step){

    currentIndex += step;

    if(currentIndex < 0){

        currentIndex =
        images.length - 1;
    }

    if(currentIndex >= images.length){

        currentIndex = 0;
    }

    document
    .getElementById("lightbox-img")
    .src =
    images[currentIndex];
}

document.addEventListener(
"keydown",
function(e){

    if(
        document
        .getElementById("lightbox")
        .style.display === "flex"
    ){

        if(e.key === "ArrowRight"){

            changeImage(1);
        }

        if(e.key === "ArrowLeft"){

            changeImage(-1);
        }

        if(e.key === "Escape"){

            closeLightbox();
        }
    }
});