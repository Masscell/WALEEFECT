function toggleMenu() {
    document.getElementById('hamburger').classList.toggle('active');
    document.getElementById('navMenu').classList.toggle('active');
}
function closeMenu() {
    document.getElementById('hamburger').classList.remove('active');
    document.getElementById('navMenu').classList.remove('active');
}

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 50;
    document.getElementById('logo').classList.toggle('scrolled', scrolled);
    document.getElementById('hamburger').classList.toggle('scrolled', scrolled);
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section-header, .gallery-item, .about-content, .contact-content').forEach(el => {
    observer.observe(el);
});

// Text Morphing Animation
const morphText = document.getElementById('text-morph');
const words = ["Moments", "Emotions", "Stories", "Soul", "Vibes", "Beauty"];
let wordIndex = 0;

if (morphText) {
    setInterval(() => {
        morphText.classList.add('morph-out');
        setTimeout(() => {
            wordIndex = (wordIndex + 1) % words.length;
            morphText.innerText = words[wordIndex];
            morphText.classList.remove('morph-out');
        }, 500); // Matches CSS transition time
    }, 3000);
}

// Background Slider Animation
const slides = document.querySelectorAll('.hero-slide');
let slideIndex = 0;

if (slides.length > 0) {
    setInterval(() => {
        slides[slideIndex].classList.remove('active');
        slideIndex = (slideIndex + 1) % slides.length;
        slides[slideIndex].classList.add('active');
    }, 6000); // Change slide every 6 seconds
}

// Testimonial Slider Animation
const testimonialSlides = document.querySelectorAll('.testimonial-slide');
let testimonialIndex = 0;

if (testimonialSlides.length > 0) {
    setInterval(() => {
        testimonialSlides[testimonialIndex].classList.remove('active');
        testimonialIndex = (testimonialIndex + 1) % testimonialSlides.length;
        testimonialSlides[testimonialIndex].classList.add('active');
    }, 5000); // Change testimonial every 5 seconds
}
