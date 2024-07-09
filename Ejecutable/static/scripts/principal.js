document.addEventListener("DOMContentLoaded", function () {
  var modal = document.getElementById("myModal");
  var span = document.getElementsByClassName("close")[0];
  var images = document.getElementsByClassName("carousel-image");
  var currentIndex = 0;

  modal.style.display = "block"; // Mostrar el modal

  // Cerrar el modal cuando se hace clic en el botón de cerrar (x)
  span.onclick = function () {
    modal.style.display = "none"; // Ocultar el modal
  }

  // Cerrar el modal cuando se hace clic fuera del contenido del modal
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none"; // Ocultar el modal
    }
  }

  // Mostrar la imagen actual
  function showImage(index) {
    for (var i = 0; i < images.length; i++) {
      images[i].style.display = "none";
    }
    images[index].style.display = "block";
  }

  // Navegar a la siguiente imagen
  window.nextImage = function () {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
  }

  // Navegar a la imagen anterior
  window.prevImage = function () {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
  }

  // Mostrar la primera imagen inicialmente
  showImage(currentIndex);

  // Agregar event listeners para las flechas de navegación
  document.getElementById("next").addEventListener("click", nextImage);
  document.getElementById("prev").addEventListener("click", prevImage);
});