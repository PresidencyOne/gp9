document.getElementById('registrationForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const department = document.getElementById('department').value;
    const year = document.getElementById('year').value;
    const formMessage = document.getElementById('formMessage');

    // Basic validation
    if (!fullName || !email || !phone || !department || !year) {
        formMessage.textContent = 'Please fill out all fields.';
        formMessage.classList.remove('success');
        return;
    }

    // Validate email
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        formMessage.textContent = 'Please enter a valid email address.';
        formMessage.classList.remove('success');
        return;
    }

    // Validate phone number
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        formMessage.textContent = 'Please enter a valid 10-digit phone number.';
        formMessage.classList.remove('success');
        return;
    }

    // Send form data to server
    try {
        const response = await fetch('/submit-toastmasters-registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ fullName, email, phone, department, year }),
        });

        const result = await response.text();
        if (response.ok) {
            formMessage.textContent = result;
            formMessage.classList.add('success');
            this.reset();
        } else {
            formMessage.textContent = 'Failed to register. Try again later.';
            formMessage.classList.remove('success');
        }
    } catch (err) {
        console.error('❌ Error:', err);
        formMessage.textContent = 'An error occurred. Please try again.';
        formMessage.classList.remove('success');
    }
});
