document.addEventListener("DOMContentLoaded", () => {
    // Smooth Scroll
    const links = document.querySelectorAll(".nav-links a, .cta-button");
    links.forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetSection = document.getElementById(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: "smooth"
            });
        });
    });

    // Register Button Alert
    const registerButton = document.querySelector(".register-button");
    registerButton.addEventListener("click", () => {
        alert("Thank you for your interest! You'll be redirected to the registration form.");
        // Replace with actual registration form URL
        window.location.href = "https://forms.gle/example";
    });

    // Fade-in Animation on Scroll
    const elements = document.querySelectorAll(".about, .events, .gallery, .contact");
    const observer = new IntersectionObserver(
        entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("fade-in");
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    elements.forEach(element => {
        element.style.opacity = 0;
        element.style.transform = "translateY(20px)";
        element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
        observer.observe(element);
    });

    // Add fade-in class for CSS
    const style = document.createElement("style");
    style.innerHTML = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});