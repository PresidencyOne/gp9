form.addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevent default form submission

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        'vocal-range': document.getElementById('vocal-range').value,
        experience: document.getElementById('experience').value
    };

    try {
        const res = await fetch('/submit-singing-registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (res.ok) {
            alert(`Thank you, ${formData.name}, for registering!`);
            form.reset();
        } else {
            alert('Something went wrong. Please try again later.');
        }
    } catch (err) {
        console.error('Error submitting form:', err);
        alert('Error submitting form');
    }
});
