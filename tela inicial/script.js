document.getElementById('menu-toggle').addEventListener('click', function() {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
});
let currentIndex = 0;

function moveSlide(step) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;

    currentIndex = (currentIndex + step + totalSlides) % totalSlides;

    const newTransformValue = -currentIndex * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${newTransformValue}%)`;
}

// Inicializa o carrossel para exibir a primeira imagem
document.addEventListener('DOMContentLoaded', function() {
    moveSlide(0);
});
