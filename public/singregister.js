document.addEventListener('DOMContentLoaded', () => {
    // Fade-in animation for form
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animationDelay = `${index * 0.2}s`;
            el.style.opacity = '1';
        }, 100);
    });

    // Form submission handling
    const form = document.getElementById('registration-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('name').value;
        alert(`Thank you, ${name}, for registering! We'll contact you soon.`);
        form.reset();
    });
});