// Funcionalidad para la sección de video
function playVideo() {
    const videoPlaceholder = document.querySelector('.video-placeholder');
    const playButton = document.querySelector('.play-button');
    
    // Agregar efecto de clic
    playButton.style.transform = 'scale(0.9)';
    setTimeout(() => {
        playButton.style.transform = 'scale(1.1)';
    }, 150);
    
    // Simular reproducción de video (aquí puedes integrar un reproductor real)
    setTimeout(() => {
        // Crear overlay de video
        const videoOverlay = document.createElement('div');
        videoOverlay.className = 'video-overlay';
        videoOverlay.innerHTML = `
            <div class="video-modal">
                <div class="video-modal-header">
                    <h3>Video Institucional EduKid</h3>
                    <button class="close-video" onclick="closeVideo()">
                        <i class="fas fa-times"></i>
                    </button>
                </div>
                <div class="video-modal-content">
                    <div class="video-iframe-container">
                        <iframe 
                            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                            frameborder="0" 
                            allowfullscreen>
                        </iframe>
                    </div>
                </div>
            </div>
        `;
        
        document.body.appendChild(videoOverlay);
        document.body.style.overflow = 'hidden';
        
        // Animar entrada del modal
        setTimeout(() => {
            videoOverlay.classList.add('active');
        }, 10);
        
    }, 300);
}

function closeVideo() {
    const videoOverlay = document.querySelector('.video-overlay');
    if (videoOverlay) {
        videoOverlay.classList.remove('active');
        setTimeout(() => {
            document.body.removeChild(videoOverlay);
            document.body.style.overflow = 'auto';
        }, 300);
    }
}

// Animaciones al hacer scroll
function initVideoAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observar elementos para animar
    const elementsToAnimate = document.querySelectorAll(
        '.video-player-container, .stat-item, .video-features li'
    );
    
    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}

// Contador animado para las estadísticas
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number');
    
    counters.forEach(counter => {
        const target = parseInt(counter.textContent.replace(/\D/g, ''));
        const suffix = counter.textContent.replace(/[0-9]/g, '');
        let current = 0;
        const increment = target / 50;
        
        const updateCounter = () => {
            if (current < target) {
                current += increment;
                counter.textContent = Math.ceil(current) + suffix;
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + suffix;
            }
        };
        
        // Iniciar animación cuando el elemento sea visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    updateCounter();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    initVideoAnimations();
    animateCounters();
});

// Cerrar modal con tecla Escape
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        closeVideo();
    }
});