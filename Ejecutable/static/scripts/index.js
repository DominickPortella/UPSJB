var images = document.querySelectorAll(".image-container img");
var currentIndex = 0;
function changeImage(index) {
    images[currentIndex].style.display = "none";
    currentIndex = index;
    images[currentIndex].style.display = "block";
    updateButtonStyle();
}
function updateButtonStyle() {
    var buttons = document.querySelectorAll(".image-controls button");
    buttons.forEach(function (button) {
        button.classList.remove("active");
    });
    buttons[currentIndex].classList.add("active");
}
images[currentIndex].style.display = "block";
setInterval(function () {
    changeImage((currentIndex + 1) % images.length);
}, 5000);

function redirectToLogin() {
    window.location.href = "login.html";
}