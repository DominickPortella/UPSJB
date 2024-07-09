document.addEventListener('DOMContentLoaded', function () {
  // Hacer que el span redirija a la URL especificada
  const studentText = document.querySelector('.student-text');
  studentText.addEventListener('click', function (event) {
    const url = studentText.getAttribute('data-url');
    window.location.href = url;
    event.stopPropagation(); // Evita que el evento clic del botón se dispare
  });

  // Prevenir cualquier acción cuando se presione el botón
  const studentButton = document.querySelector('.student-button');
  studentButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevenir la acción predeterminada del botón
  });
});