// Preloader
window.onload = function() {
    let contenedor = document.getElementById("contenedorPreloader");
    contenedor.style.visibility = "hidden";
    contenedor.style.opacity = "0";
}

// Navbar
function scrollEffect(pxPantalla) {
    window.addEventListener("scroll", () => {
        let scroll = document.documentElement.scrollTop;
        let bgChange = document.getElementById("navScroll");
        let marcoHamburg = document.getElementById("marcoHamburg");
        let iconoHamburg = document.getElementById("iconoHamburg");

        if (scroll > pxPantalla) {
            bgChange.className = "navbar fixed-top navbar-expand-lg fuentes-personalizadas-scroll";
            marcoHamburg.className = "navbar-toggler text-dark";
            iconoHamburg.className = "fas fa-bars text-dark";
        } else {
            bgChange.className = "navbar fixed-top navbar-expand-lg fuentes-personalizadas";
            marcoHamburg.className = "navbar-toggler text-light";
            iconoHamburg.className = "fas fa-bars text-light";
        }
    })
}

scrollEffect(20);

// Ocultar ícono whatsapp
window.onscroll = function() {
    if (document.documentElement.scrollTop > 3000) {
        document.getElementById("btnWhatsApp").classList.add("btnWhatsAppOcultar");
    } else {
        document.getElementById("btnWhatsApp").classList.remove("btnWhatsAppOcultar");
    }
}