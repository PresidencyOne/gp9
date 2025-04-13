// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const sectionId = this.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', function() {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.transform = `translate(-50%, -50%) translateY(${scrolled * 0.5}px)`;
});

// Animate gallery items on scroll
const galleryItems = document.querySelectorAll('.gallery-item');
const animateOnScroll = () => {
    galleryItems.forEach(item => {
        const itemPosition = item.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (itemPosition < screenPosition) {
            item.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);

// Add animate class to gallery items for CSS animation
galleryItems.forEach(item => {
    item.classList.add('gallery-animate');
});


