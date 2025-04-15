document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("registration-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Basic client-side validation
        const fullName = document.getElementById("full-name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const department = document.getElementById("department").value;
        const interest = document.getElementById("interest").value;

        if (!fullName || !email || !phone || !department || !interest) {
            alert("Please fill out all fields.");
            return;
        }

        if (!/^[a-zA-Z\s]+$/.test(fullName)) {
            alert("Full name should only contain letters and spaces.");
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (!/^\d{10}$/.test(phone)) {
            alert("Please enter a valid 10-digit phone number.");
            return;
        }

        // Simulate form submission
        alert(`Thank you, ${fullName}! Your registration for PUASC has been submitted. We'll contact you soon!`);
        form.reset();
    });

    // Add focus effect for select elements
    const selects = document.querySelectorAll("select");
    selects.forEach(select => {
        select.addEventListener("change", () => {
            if (select.value) {
                select.classList.add("filled");
            } else {
                select.classList.remove("filled");
            }
        });
    });
});