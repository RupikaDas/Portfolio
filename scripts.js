// Carousel functionality
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector('.carousel');
    let isDown = false;
    let startX;
    let scrollLeft;

    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        carousel.classList.add('active');
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });
    carousel.addEventListener('mouseleave', () => {
        isDown = false;
        carousel.classList.remove('active');
    });
    carousel.addEventListener('mouseup', () => {
        isDown = false;
        carousel.classList.remove('active');
    });
    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 3; //scroll-fast
        carousel.scrollLeft = scrollLeft - walk;
    });
});

// Form submission handling
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Form submitted!');
    // Add form submission logic here (e.g., send data to server)
});
