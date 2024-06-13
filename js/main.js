const form = document.querySelector('form');
const firstNameInput = document.getElementById('firstName');
const firstNameError = document.getElementById('firstNameError');
const lastNameInput = document.getElementById('lastName');
const lastNameError = document.getElementById('lastNameError');
const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');
const phoneInput = document.getElementById('phone');
const phoneError = document.getElementById('phoneError');





firstNameInput.addEventListener('input', function() {
  firstNameInput.validity.valid ? firstNameError.style.display = 'none' : firstNameError.style.display = 'block';
});

lastNameInput.addEventListener('input', function() {
  lastNameInput.validity.valid ? lastNameError.style.display = 'none' : lastNameError.style.display = 'block';
});

emailInput.addEventListener('input', function() {
  emailInput.validity.valid ? emailError.style.display = 'none' : emailError.style.display = 'block';
});

phoneInput.addEventListener('input', function() {
  phoneInput.validity.valid ? phoneError.style.display = 'none' : phoneError.style.display = 'block';
});

form.addEventListener('submit', function(event) {
  if (!phoneInput.validity.valid) {
    phoneError.style.display = 'block';
    event.preventDefault();
  }
  
  if (!firstNameInput.validity.valid) {
    firstNameError.style.display = 'block';
    event.preventDefault();
  }

  if (!lastNameInput.validity.valid) {
    lastNameError.style.display = 'block';
    event.preventDefault();
  }

  if (!emailInput.validity.valid) {
    emailError.style.display = 'block';
    event.preventDefault();
  }
});