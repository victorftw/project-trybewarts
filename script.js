const botaoHeader = document.getElementById('botao-header');
const inputPassword = document.getElementById('senha-header');
const inputEmail = document.getElementById('email-header');

botaoHeader.addEventListener('click', () => {
  if (
    inputPassword.value === '123456' && inputEmail.value === 'tryber@teste.com'
  ) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const checkbox = document.querySelector('#agreement');
const submitBtn = document.querySelector('#submit-btn');

checkbox.addEventListener('click', () => {
  if (checkbox.checked === true) {
    submitBtn.disabled = false;
  }
  if (checkbox.checked === false) {
    submitBtn.disabled = true;
  }
});

window.onload = () => {
  submitBtn.disabled = true;
};
