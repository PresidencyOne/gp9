document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registrationForm');

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const department = document.getElementById('department').value;
        const skills = document.getElementById('skills').value.trim();

        // Basic validation
        if (!name || !email || !phone || !department) {
            alert('Please fill in all required fields.');
            return;
        }

        try {
            const res = await fetch('/submit-coding-registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, phone, department, skills }),
            });

            const message = await res.text();
            if (res.ok) {
                alert(message);
                form.reset();
            } else {
                alert('❌ Submission failed: ' + message);
            }
        } catch (err) {
            console.error('Error:', err);
            alert('An error occurred. Please try again.');
        }
    });
});
