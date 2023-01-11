let email = document.querySelector('#email');
let tel = document.querySelector('#phone_number');
let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm_password');
let error = document.querySelector(".error");

//Error Query Selectors
let emailError = document.querySelector('#emailError');
let telError = document.querySelector('#telError');
let passError = document.querySelector('#passError');
let passConError = document.querySelector('#passConError');

email.addEventListener('input', () => {
    if (email.validity.typeMismatch) {
        emailError.textContent = 'Please enter a valid Email';
    } else {
        emailError.textContent = "";
    }
});

tel.addEventListener('input', () => {
    if (tel.validity.patternMismatch) {
        telError.textContent = 'Please enter a 10 digit phone number.';
    } else {
        telError.textContent = "";
    }
});

password.addEventListener('input', () => {
    if (password.validity.patternMismatch) {
        passError.textContent = "Must be 8 characters long & contain 1 upper case letter and 1 number.";
    } else {
        passError.textContent = '';
    }
});

confirmPassword.addEventListener('input', () => {
    if (password.value === confirmPassword.value) {
        passConError.textContent = "password match";
    } else {
        passConError.textContent = "*passwords do not match";
    }
});