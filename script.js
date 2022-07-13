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
