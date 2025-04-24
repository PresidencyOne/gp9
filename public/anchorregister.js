document.getElementById('registration-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const fullName = document.getElementById('full-name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const department = document.getElementById('department').value;
    const interest = document.getElementById('interest').value;

    try {
        const res = await fetch('/submit-anchor-registration', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'full-name': fullName, email, phone, department, interest })
        });

        const msg = await res.text();
        alert(msg);
        this.reset();
    } catch (err) {
        alert('Failed to submit form. Please try again later.');
        console.error(err);
    }
});
