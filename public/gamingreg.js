const form = document.getElementById("registrationForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get values
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const phone = form.phone.value.trim(); // Changed from email to phone
  const game = form.game.value;
  const studentId = form.studentId.value.trim();

  // Validation
  let isValid = true;

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError"); // Changed from emailError to phoneError
  const gameError = document.getElementById("gameError");
  const studentIdError = document.getElementById("studentIdError");

  // Reset errors
  nameError.style.display = "none";
  emailError.style.display = "none";
  phoneError.style.display = "none"; // Changed from emailError to phoneError
  gameError.style.display = "none";
  studentIdError.style.display = "none";

  if (!name) {
    nameError.style.display = "block";
    isValid = false;
  }

  if (!email || !email.includes("@")) {
    emailError.style.display = "block";
    isValid = false;
  }

  if (!phone) {
    phoneError.style.display = "block";
    isValid = false;
  }

  if (!game) {
    gameError.style.display = "block";
    isValid = false;
  }

  if (!studentId) {
    studentIdError.style.display = "block";
    isValid = false;
  }

  if (isValid) {
    // Submit via fetch
    fetch("/submit-gaming-registration", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, phone, game, studentId })
    })
    .then((res) => res.text())
    .then((message) => {
      alert(message);
      form.reset();
    })
    
  }
});