document.addEventListener("DOMContentLoaded", function () {
    const logoImg = document.querySelector('.logo img');
    const originalLogoSrc = logoImg.src;
    const extendedLogoSrc = '/static/images/logo_extendido.png';
    const aside = document.querySelector('aside');
    const headerNav = document.querySelector('header nav');
    const footer = document.querySelector('footer');
    let extendedLogo;
    aside.addEventListener('mouseover', function () {
        logoImg.style.visibility = 'hidden';
        if (!extendedLogo) {
            extendedLogo = document.createElement('img');
            extendedLogo.src = extendedLogoSrc;
            extendedLogo.className = 'logo-extended';
            aside.appendChild(extendedLogo);
        } else {
            extendedLogo.style.display = 'block';
        }
        headerNav.classList.add('expanded');
        footer.classList.add('expanded');
    });
    aside.addEventListener('mouseleave', function () {
        logoImg.style.visibility = 'visible';
        if (extendedLogo) {
            extendedLogo.style.display = 'none';
            headerNav.classList.remove('expanded');
            footer.classList.remove('expanded');
        }
        var submenus = document.querySelectorAll('.submenu');
        Array.prototype.forEach.call(submenus, function (submenu) {
            submenu.style.display = "none";
            moveSpecialItems(false);
        });
    });
    var dropdownLinks = document.querySelectorAll("a");
    Array.prototype.forEach.call(dropdownLinks, function (dropdownLink) {
        dropdownLink.addEventListener("click", function (event) {
            event.preventDefault();
            var submenu = this.nextElementSibling;
            submenu.style.display = submenu.style.display === "block" ? "none" : "block";
            moveSpecialItems(submenu.style.display === "block");
            var span = this.parentNode.querySelector('.dropdown-span');
            toggleArrow(span);
        });
    });

    function toggleArrow(span) {
        var arrow = span.querySelector('.dropdown-arrow');
        arrow.style.transform = arrow.style.transform === 'rotate(0deg)' ? 'rotate(90deg)' : 'rotate(0deg)';
    }
    function moveSpecialItems(isOpen) {
        const listItems = document.querySelectorAll('li');
        listItems.forEach(li => {
            const span = li.querySelector('span');
            if (span && (span.textContent === 'Portal de Biblioteca' || span.textContent === 'Cambiar Mi Contraseña')) {
                if (isOpen) {
                    li.classList.add('submenu-open');
                } else {
                    li.classList.remove('submenu-open');
                }
            }
        });
    }
});