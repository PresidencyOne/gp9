document.addEventListener('DOMContentLoaded', () => {
    // Fade-in animation for elements
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animationDelay = `${index * 0.2}s`;
            el.style.opacity = '1';
        }, 100);
    });

    // Slide-in animation for event cards
    const slideElements = document.querySelectorAll('.slide-in');
    slideElements.forEach((el, index) => {
        setTimeout(() => {
            el.style.animationDelay = `${index * 0.3}s`;
            el.style.transform = 'translateX(0)';
            el.style.opacity = '1';
        }, 200);
    });

    // Register button click effect
    const registerBtn = document.querySelector('.register-btn');
    registerBtn.addEventListener('click', () => {
       
    });
});