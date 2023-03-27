const showPasswordBtn = document.getElementById('show-password-btn');
const passwordInput = document.getElementById('password');

showPasswordBtn.addEventListener('click', (event) => {
  const icon = event.currentTarget.querySelector('i');
  const type =
    passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  icon.classList.toggle('bi-eye-slash');
});
