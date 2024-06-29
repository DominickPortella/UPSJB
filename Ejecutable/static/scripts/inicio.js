const carousel = document.querySelector(".carousel");
const slides = carousel.querySelectorAll("img");
const buttons = carousel.querySelectorAll(".carousel-btn");
let slideIndex = 0;

buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        slides.forEach((slide) => slide.classList.remove("active"));
        buttons.forEach((btn) => btn.classList.remove("active"));
        slides[index].classList.add("active");
        button.classList.add("active");
        slideIndex = index;
    });
});

function moveSlides() {
    slides.forEach((slide) => slide.classList.remove("active"));
    buttons.forEach((btn) => btn.classList.remove("active"));
    slides[slideIndex].classList.add("active");
    buttons[slideIndex].classList.add("active");
    slideIndex++;
    if (slideIndex >= slides.length) {
        slideIndex = 0;
    }
}

setInterval(moveSlides, 5000);