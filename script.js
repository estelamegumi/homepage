document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    
    let currentSlide = 0;
    const slideInterval = 5000; // Tempo em milissegundos para troca automática

    function showSlide(index) {
        // Remove 'active' de todos os slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Adiciona 'active' ao slide atual
        slides[index].classList.add('active');
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }

    // Event Listeners para os botões
    nextBtn.addEventListener('click', () => {
        nextSlide();
        // Reinicia o intervalo para não haver uma troca dupla
        clearInterval(autoPlay);
        autoPlay = setInterval(nextSlide, slideInterval);
    });

    prevBtn.addEventListener('click', () => {
        prevSlide();
        // Reinicia o intervalo
        clearInterval(autoPlay);
        autoPlay = setInterval(nextSlide, slideInterval);
    });

    // Inicia o carrossel
    showSlide(currentSlide);

    // Troca automática
    let autoPlay = setInterval(nextSlide, slideInterval);
});