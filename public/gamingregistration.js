
document.addEventListener('DOMContentLoaded', () => {
    
    const form = document.getElementById('registrationForm');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        let isValid = true;

        document.querySelectorAll('.error').forEach(error => error.style.display = 'none');

        
        const name = document.getElementById('name').value;
        if (name.length < 2) {
            document.getElementById('nameError').style.display = 'block';
            isValid = false;
        }

        
        const email = document.getElementById('email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            document.getElementById('emailError').style.display = 'block';
            isValid = false;
        }

       
        const game = document.getElementById('game').value;
        if (!game) {
            document.getElementById('gameError').style.display = 'block';
            isValid = false;
        }

       
        const studentId = document.getElementById('studentId').value;
        if (studentId.length < 5) {
            document.getElementById('studentIdError').style.display = 'block';
            isValid = false;
        }

        if (isValid) {
            alert('Registration successful! Welcome to Presidency University Gaming Club!');
            form.reset();
        }
    });

   
    
});
