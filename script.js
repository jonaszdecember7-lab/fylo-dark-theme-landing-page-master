const submitButton = document.getElementById('submit-button');
const errorMessage = document.querySelector('.errorMessage');
const userInput = document.querySelector('input');
const form = document.querySelector('form')
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    const email = userInput.value.trim();
    if (!emailPattern.test(email)) {
        errorMessage.classList.remove('hidden');
        userInput.setAttribute('aria-invalid', 'true');
    }
    else {
        userInput.removeAttribute('aria-invalid');
        errorMessage.classList.add('hidden');
        userInput.value = '';
    }
})