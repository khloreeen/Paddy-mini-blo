let currentSlide = 0;
const testimonials = document.querySelectorAll('.testimonial');
const totalSlides = testimonials.length;

// Function to display the correct testimonial
function showSlide(index) {
    const carousel = document.querySelector('.carousel');
    // Calculate the offset for sliding
    carousel.style.transform = `translateX(-${index * (100 / totalSlides)}%)`;
}

// Function to move to the next slide
function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

// Function to move to the previous slide
function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

// Initialize the first slide
showSlide(currentSlide);

// Optional: Set an auto-slide interval
setInterval(nextSlide, 5000);