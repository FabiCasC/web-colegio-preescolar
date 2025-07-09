// Botón scroll-up
document.addEventListener('DOMContentLoaded', function() {
    const scrollUp = document.querySelector(".scroll-up");

    function alternarBotonScrollUp(pixeles) {
        let ticking = false;
        
        function updateScrollUp() {
            const scroll = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scroll > pixeles) {
                scrollUp.classList.add("visible");
            } else {
                scrollUp.classList.remove("visible");
            }
            
            ticking = false;
        }

        window.addEventListener("scroll", () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollUp);
                ticking = true;
            }
        });
    }

    // Función para hacer scroll hacia arriba
    scrollUp.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Inicializar con 350px de scroll
    alternarBotonScrollUp(350);
});

// =========================
// MENÚ HAMBURGUESA MÓVIL
// =========================
document.addEventListener('DOMContentLoaded', function() {
    const btnHambur = document.querySelector('.menu-hambur');
    const menu = document.querySelector('.menu');
    const overlay = document.querySelector('.menu-overlay');
    const menuLinks = document.querySelectorAll('.menu ul li a');
    const iconHambur = btnHambur.querySelector('i');

    function abrirMenu() {
        menu.classList.add('menu-activo');
        overlay.classList.add('activo');
        document.body.style.overflow = 'hidden';
        if(iconHambur) {
            iconHambur.classList.remove('fa-bars');
            iconHambur.classList.add('fa-times');
        }
    }
    function cerrarMenu() {
        menu.classList.remove('menu-activo');
        overlay.classList.remove('activo');
        document.body.style.overflow = '';
        if(iconHambur) {
            iconHambur.classList.remove('fa-times');
            iconHambur.classList.add('fa-bars');
        }
    }

    btnHambur.addEventListener('click', function(e) {
        e.stopPropagation();
        if (menu.classList.contains('menu-activo')) {
            cerrarMenu();
        } else {
            abrirMenu();
        }
    });

    overlay.addEventListener('click', cerrarMenu);

    menuLinks.forEach(link => {
        link.addEventListener('click', cerrarMenu);
    });

    // Cerrar menú si se redimensiona a escritorio
    window.addEventListener('resize', function() {
        if (window.innerWidth > 900) {
            cerrarMenu();
        }
    });
});