document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('danceForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const danceStyle = document.getElementById('dance-style').value;

        
        if (name && email && danceStyle) {
            alert(`Woohoo, ${name}! You're ready to dance with us! We'll contact you at ${email} soon!`);
            form.reset();
        } else {
            alert('Please fill in all required fields to join the fun!');
        }
    });

   
    const inputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.style.transform = 'scale(1.05)';
            input.style.backgroundColor = '#ffe6f0';
        });
        input.addEventListener('blur', () => {
            input.style.transform = 'scale(1)';
            input.style.backgroundColor = '#fff';
        });
    });
});