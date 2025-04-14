document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const department = document.getElementById('department').value;
    const year = document.getElementById('year').value;
    const formMessage = document.getElementById('formMessage');

    if (!fullName || !email || !phone || !department || !year) {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.classList.remove('success');
        return;
    }

    // Basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.classList.remove('success');
        return;
    }

    // Basic phone validation (10 digits)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        formMessage.textContent = 'Please enter a valid 10-digit phone number.';
        formMessage.classList.remove('success');
        return;
    }

    // Simulate form submission
    formMessage.textContent = 'Registration successful! Welcome to Toastmasters Club!';
    formMessage.classList.add('success');

    // Reset form
    this.reset();
});