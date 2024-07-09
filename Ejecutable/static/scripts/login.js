document.addEventListener("DOMContentLoaded", function () {
  const enableMarkingLink = document.querySelector(".enable-marking");

  if (enableMarkingLink) {
    enableMarkingLink.addEventListener("click", function (event) {
      event.preventDefault();

      if (this.textContent === "Habilitar marcado") {
        this.textContent = "Deshabilitar marcado";
      } else {
        this.textContent = "Habilitar marcado";
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var copyInfoLink = document.querySelector(".copy-info");
  var copiedText = document.getElementById("copied-text");

  copyInfoLink.addEventListener("click", function (event) {
    event.preventDefault();

    copiedText.style.opacity = 0;

    setTimeout(function () {
      copiedText.innerHTML = '<span class="check-icon"></span>Copiado';
      copiedText.style.color = "#107c10";
      copiedText.style.display = "inline";
      copiedText.style.opacity = 1;
    }, 250);
  });

  window.addEventListener("beforeunload", function () {
    copiedText.style.display = "none";
  });

  copiedText.addEventListener("mouseover", function () {
    this.style.cursor = "default";
  });
});

function showMessage() {
  var message = document.getElementById("troubleshoot-message");
  if (message.style.display === "none" || message.style.display === "") {
    message.style.display = "block";
  } else {
    message.style.display = "none";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var emailInput = document.querySelector(
    '.login-container input[type="email"]'
  );

  emailInput.addEventListener("mouseenter", function () {
    if (emailInput === document.activeElement) {
      emailInput.style.borderBottomColor = "#333333";
    } else {
      emailInput.style.borderBottomColor = "#333333";
    }
  });

  emailInput.addEventListener("mouseleave", function () {
    if (emailInput === document.activeElement) {
      emailInput.style.borderBottomColor = "#0067b8";
    } else {
      emailInput.style.borderBottomColor = "#666666";
    }
  });

  emailInput.addEventListener("focus", function () {
    emailInput.style.borderBottomColor = "#333333";
  });

  emailInput.addEventListener("blur", function () {
    emailInput.style.borderBottomColor = "#666666";
  });
});

function updatePeruTime() {
  const timestampElement = document.getElementById("timestamp");
  const peruTimeOffset = -5;
  const peruDate = new Date(
    new Date().getTime() + peruTimeOffset * 60 * 60 * 1000
  );
  const formattedDate = peruDate.toISOString().split("T")[0];
  const formattedTime = peruDate.toISOString().split("T")[1].split(".")[0];
  timestampElement.textContent = `${formattedDate}T${formattedTime}Z`;
}

setInterval(updatePeruTime, 1000);
window.onload = updatePeruTime;

function showMessage() {
  var message = document.getElementById("troubleshoot-message");
  var loginContainer = document.querySelector(".login-container");
  var additionalContainer = document.querySelector(".additional-container");

  if (message.style.display === "none" || message.style.display === "") {
    message.style.display = "block";
    message.style.bottom = "-177.5px";

    loginContainer.style.transform = "translateY(-134.4px)";
    additionalContainer.style.transform = "translateY(-135px)";
  } else {
    message.style.bottom = "-900px";

    loginContainer.style.transform = "translateY(0)";
    additionalContainer.style.transform = "translateY(0)";

    setTimeout(function () {
      message.style.display = "none";
    }, -1);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  const nextButton = document.querySelector("#next-button");
  const backButton = document.querySelector(".circular-button");
  const emailInput = document.querySelector("#email-input");
  const emailDisplay = document.querySelector("#email-display");
  const slideContainer = document.querySelector(".slide-container");
  const passwordContainer = document.querySelector(".password-container");
  const loginContainer = document.querySelector(".login-container");
  const additionalContainer = document.querySelector(".additional-container");
  const loginButton = document.querySelector("#login-button");
  const passwordInput = document.querySelector(".password-container input[type='password']");
  let originalLoginContainerHeight = getComputedStyle(loginContainer).minHeight;

  const storedEmail = localStorage.getItem("storedEmail");
  if (storedEmail) {
    emailInput.value = storedEmail;
  }

  emailInput.addEventListener("input", function () {
    const newEmail = emailInput.value;
    localStorage.setItem("storedEmail", newEmail);
  });

  const storedPassword = localStorage.getItem("storedPassword");
  if (storedPassword) {
    passwordInput.value = storedPassword;
  }

  passwordInput.addEventListener("input", function () {
    const newPassword = passwordInput.value;
    localStorage.setItem("storedPassword", newPassword);
  });

  window.history.replaceState({ view: "slide" }, "");

  nextButton.addEventListener("click", function (event) {
    event.preventDefault();
    if (emailInput.value === "") {
      return;
    }

    emailDisplay.textContent = emailInput.value.toLowerCase();
    slideContainer.classList.add("desplazado");
    passwordContainer.classList.add("show");

    if (additionalContainer) {
      additionalContainer.style.display = "none";
    }

    loginContainer.style.minHeight = "350px";

    window.history.pushState({ view: "password" }, "");
  });

  backButton.addEventListener("click", function (event) {
    event.preventDefault();
    navigateToSlideView();
  });

  window.addEventListener("popstate", function (event) {
    if (event.state && event.state.view) {
      if (event.state.view === "slide") {
        navigateToSlideView();
      } else if (event.state.view === "password") {
        navigateToPasswordView();
      }
    }
  });

  function navigateToSlideView() {
    slideContainer.classList.remove("desplazado");
    passwordContainer.classList.remove("show");

    if (additionalContainer) {
      additionalContainer.style.display = "flex";
    }

    loginContainer.style.minHeight = originalLoginContainerHeight;
  }

  function navigateToPasswordView() {
    slideContainer.classList.add("desplazado");
    passwordContainer.classList.add("show");

    if (additionalContainer) {
      additionalContainer.style.display = "none";
    }

    loginContainer.style.minHeight = "350px";
  }

  loginButton.addEventListener("click", function (event) {
    event.preventDefault();
    const passwordValue = passwordInput.value;

    if (passwordValue === "Jugodefresa4321") {
      window.location.href = "/perfil/";
    } else {
      alert("Contraseña incorrecta. Por favor, inténtalo de nuevo.");
    }
  });
});