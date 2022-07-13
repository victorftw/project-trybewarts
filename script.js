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

// countador de caracteres no text area

const textarea = document.getElementById('textarea');
const contador = document.getElementById('counter');
contador.innerHTML = 500;

textarea.addEventListener('input', (e) => {
  const { target } = e;
  const maxLength = target.getAttribute('maxlength');
  const currentLength = target.value.length;
  contador.innerHTML = maxLength - currentLength;
});
