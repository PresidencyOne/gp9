// Hamburger Menu Toggle
document.querySelector(".hamburger").addEventListener("click", function() {
    document.querySelector(".nav-links").classList.toggle("active");
});

// Navbar Scroll Effect
window.addEventListener('scroll', function() {
    var navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// Scroll to Top Function
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Intersection Observer for Animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, observerOptions);

// Animate Fest Cards
document.querySelectorAll('.fest-card').forEach(card => {
    card.classList.add('animate-on-scroll');
    observer.observe(card);
});

// Animate Hero Section Elements
document.querySelectorAll('.hero h1, .hero p, .hero .btn').forEach(element => {
    element.classList.add('animate-on-load');
});

// Animate Nav Links on Menu Open
document.querySelector('.hamburger').addEventListener('click', () => {
    const navLinks = document.querySelectorAll('.nav-links.active li');
    navLinks.forEach((link, index) => {
        link.style.animation = `slideInRight 0.3s ease forwards ${index * 0.1}s`;
    });
});

// Animate Contact Social Icons
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.classList.add('animate-on-scroll');
    observer.observe(icon);
});