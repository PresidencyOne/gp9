document.addEventListener('DOMContentLoaded', () => {
    // Register button action
    const registerBtn = document.querySelector('.register-btn');
    registerBtn.addEventListener('click', () => {
       
    });

    // Image hover effects
    const images = document.querySelectorAll('.gallery-img');
    images.forEach(img => {
        img.addEventListener('mouseenter', () => {
            img.style.zIndex = '10';
        });
        img.addEventListener('mouseleave', () => {
            img.style.zIndex = '1';
        });
    });

    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        let scrollPosition = window.pageYOffset;
        hero.style.backgroundPositionY = `${scrollPosition * 0.4}px`;
    });

    // Random color flash for fun facts
    const facts = document.querySelectorAll('.fun-facts li');
    facts.forEach(fact => {
        fact.addEventListener('mouseover', () => {
            const colors = ['#ffccd5', '#ffe6f0', '#ff8ba7'];
            fact.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        });
        fact.addEventListener('mouseout', () => {
            fact.style.backgroundColor = 'rgba(255, 204, 213, 0.2)';
        });
    });
});