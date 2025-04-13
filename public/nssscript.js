// Script for extra interactivity
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery-container img");
  
    images.forEach(img => {
      img.addEventListener("click", () => {
        alert("This image represents one of our club activities!");
      });
    });
  });
  