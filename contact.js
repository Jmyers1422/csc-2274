// ===== Contact forum Validation =====
const form = document.getElementById('contact-form');
const emaildata = document.getElementById('email');
const phonedata = document.getElementById('phone');
const emailErr = document.getElementById('email-error');
const phoneErr = document.getElementById('phone-error');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

function validateEmail() {
const value = emaildata.value.trim();
const isValid = emailRegex.test(value);
emaildata.setCustomValidity(isValid ? '' : 'Please enter a valid email (e.g., name@example.com).');
emailErr.textContent = emaildata.validationMessage;
return isValid;
}

function validatePhone() {
const rawDigits = phonedata.value.replace(/\D/g, ''); // remove non-digits

// Step 1: Must have exactly 10 digits
if (rawDigits.length !== 10) {
phonedata.setCustomValidity('Phone must contain exactly 10 digits.');
phoneErr.textContent = phonedata.validationMessage;
return false;
}

// Step 2: Must match one of the allowed formats
const phonePattern = /^(?:\d{10}|\d{3}[-.\s]\d{3}[-.\s]\d{4}|\(\d{3}\)[-.\s]\d{3}[-.\s]\d{4})$/;

const isValid = phonePattern.test(phonedata.value);
phonedata.setCustomValidity(isValid ? '' :
'Phone format must be 123-456-7890, 123 456 7890, 123.456.7890, or (123)456-7890.');
phoneErr.textContent = phonedata.validationMessage;
return isValid;
}

// Live validation
emaildata.addEventListener('input', validateEmail);
phonedata.addEventListener('input', validatePhone);

// On submit validation
form.addEventListener('submit', (e) => {
const okEmail = validateEmail();
const okPhone = validatePhone();

if (!okEmail || !okPhone) {
e.preventDefault();
if (!okEmail) emaildata.reportValidity();
else phonedata.reportValidity();
}
});