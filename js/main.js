$(document).ready(function() {
    $('#telefone').mask('(00) 00000-0000');

    $('#cep').mask('00000000');

    $('#cpf').mask('00000000000');

    document.querySelector('#form').addEventListener ('submit', function(e) {
        alert("Cadastrado com sucesso!");
    });
});