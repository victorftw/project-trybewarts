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

const textarea = document.getElementById('textarea');
const contador = document.getElementById('counter');
contador.innerHTML = 500;

textarea.addEventListener('input', (e) => {
  const { target } = e;
  const maxLength = target.getAttribute('maxlength');
  const currentLength = target.value.length;
  contador.innerHTML = maxLength - currentLength;
});

const formNova = document.querySelector('#evaluation-form');
const divNova = document.querySelector('#form-data');

const materias = document.getElementsByClassName('subject');
const arrayMaterias = [];

const pegaCheckboxMarcados = () => {
  for (let index = 0; index < materias.length; index += 1) {
    if (materias[index].checked === true) {
      arrayMaterias.push(materias[index].value);
    }
  }
};

function createElement() {
  for (let index = 1; index <= 7; index += 1) {
    const div = document.createElement('div');
    div.className = 'retornos';
    divNova.appendChild(div);
  }
}

function apagaForm() {
  formNova.style.display = 'none';
  divNova.classList.remove('hidden');
}

// 1 - aplicar classe hidden pro form novo e remove do form antigo;
// 2 - buscar informações dos inputs do form;
// 3 - criar lista;
// 4 - preencher lista;
function criaForm2(e) {
  e.preventDefault();
  const nome = document.getElementById('input-name');
  const sobrenome = document.getElementById('input-lastname');
  const email = document.getElementById('input-email');
  const casa = document.getElementById('house');
  const family = document.querySelector('input[name="family"]:checked');
  const avaliacao = document.querySelector('input[name="rate"]:checked');
  const retornos = document.getElementsByClassName('retornos');
  pegaCheckboxMarcados();
  apagaForm();
  createElement();
  retornos[0].innerText = `Nome: ${nome.value} ${sobrenome.value}`;
  retornos[1].innerText = `Email: ${email.value}`;
  retornos[2].innerText = `Casa: ${casa.value}`;
  retornos[3].innerText = `Família: ${family.value}`;
  retornos[4].innerText = `Matérias: ${arrayMaterias.join(', ')}`;
  retornos[5].innerText = `Avaliação: ${avaliacao.value}`;
  retornos[6].innerText = `Observações: ${textarea.value}`;
}

submitBtn.addEventListener('click', criaForm2);

window.onload = () => {
  submitBtn.disabled = true;
};
