document.addEventListener('DOMContentLoaded', function () {
  const studentText = document.querySelector('.student-text');
  studentText.addEventListener('click', function (event) {
    const url = studentText.getAttribute('data-url');
    window.location.href = url;
    event.stopPropagation();
  });
  const studentButton = document.querySelector('.student-button');
  studentButton.addEventListener('click', function (event) {
    event.preventDefault();
  });
  const logoutButton = document.querySelector(".logout-button");
  if (logoutButton) {
    logoutButton.addEventListener("click", function (event) {
      event.preventDefault();
      window.location.href = "/login/";
    });
  }
});