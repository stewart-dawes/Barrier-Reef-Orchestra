var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var dots = document.getElementsByClassName("dot");
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Change image every 2 seconds

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" dot_active", "");
    }

    dots[slideIndex-1].className += " dot_active";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

$(document).ready(function() {

    var description = [
        "http://placehold.it/300x300",
        "http://placehold.it/200x200",
        "http://placehold.it/100x100"
    ];

    var size = description.length;
    $('.item img').each(function() {
        var x = Math.floor(size * Math.random());
        if ($(this).hasClass("people")) {
            $(this).attr("src", description[x]);
        }
    });

});
var slideIndex2 = 1;
showSlides2(slideIndex);

function plusSlides2(n) {
    showSlides2(slideIndex += n);
}

function currentSlide2(n) {
    showSlides2(slideIndex = n);
}

function showSlides2(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides2");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex-1].style.display = "block";
}
