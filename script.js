
document.getElementById('clickBtn').addEventListener('click', () => {
  const btn = document.getElementById('clickText');
  btn.textContent = 'Button clicked!';
});


document.getElementById('keyInput').addEventListener('keyup', (e) => {
  document.getElementById('keyDisplay').textContent = `You typed: ${e.key}`;
});


const email = document.getElementById('email');
const password = document.getElementById('password');

email.addEventListener('input', () => {
  const error = document.getElementById('emailError');
  const valid = /\S+@\S+\.\S+/.test(email.value);
  error.textContent = valid ? "" : "Invalid email format";
});

password.addEventListener('input', () => {
  const error = document.getElementById('passwordError');
  error.textContent = password.value.length >= 8 ? "" : "Password must be at least 8 characters";
});

document.getElementById('myForm').addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
});
