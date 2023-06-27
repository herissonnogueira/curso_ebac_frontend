const form = document.querySelector('#form');
const campoA = document.querySelector('#campoA');
const campoB = document.querySelector('#campoB');
const mensagem = document.querySelector('#mensagem');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (Number(campoB.value) > Number(campoA.value)) {
        mensagem.textContent = 'Formulário válido!';
    } else {
        mensagem.textContent = 'Formulário inválido!';
    }
});