// Create slide
var slideIndex = 1;
showSlide();

var changeSlideTime = setInterval(showSlide, 4000);


function showSlide() {
    var slides = document.getElementsByClassName("section-image-frame ");
    if (slideIndex > slides.length) {slideIndex = 1}
    if (slideIndex < 1) {slideIndex = slides.length}

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
    slideIndex += 1;

    console.log(slides)
}