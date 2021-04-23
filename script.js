const form = document.getElementById('form');
const passwordEl = document.getElementById('password');
const confirmPasswordEl = document.getElementById('confirm-password');
const messageContainer = document.querySelector('.message-container');
const messageEl = document.getElementById('message');

let isValid = false;

function updateMessage(message, color) {
    messageEl.textContent = message;
    messageEl.style.color = color;
}

function validateForm() {
    // Validate form data Using Constraint API
    isValid = form.checkValidity();
    if (!isValid) {
        updateMessage('Please fill out all details.', 'red');
        return;
    }

    // Validate Password match
    if (passwordEl.value !== confirmPasswordEl.value) {
        isValid = false;
        updateMessage('Please make sure your passwords match.', 'red');
        return;
    }

    // If form is valid
    if (isValid) {
        updateMessage('Successfully registered!', '#0E7C0E');
    }
}

function storeFormData() {
    const user = {
        name: form.fullName.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    }
    console.log(user);
}

function processFormData(event) {
    event.preventDefault();
    validateForm();
    if (isValid) {
        storeFormData();
    }
}

// Event Listener 
form.addEventListener('submit', processFormData);