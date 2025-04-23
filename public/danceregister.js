form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        'dance-style': document.getElementById('dance-style').value,
        experience: document.getElementById('experience').value
    };

    try {
        const res = await fetch('/submit-dance-registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        if (res.ok) {
            const text = await res.text();
            alert(text);
            form.reset();
        } else {
            alert('Failed to submit. Please try again.');
        }
    } catch (err) {
        console.error(err);
        alert('An error occurred while submitting the form.');
    }
});
