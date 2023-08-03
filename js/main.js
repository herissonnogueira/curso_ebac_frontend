$(document).ready(function () {
    // Configurar a máscara de telefone
    $("#telefone").mask("(00) 00000-0000");

    // Configurar a validação do formulário
    $("#meuFormulario").validate({
        rules: {
        nome: "required",
        email: {
            required: true,
            email: true,
        },
        telefone: {
            required: false, // O telefone é opcional, então podemos removê-lo dos campos obrigatórios.
            minlength: 14, // O mínimo de caracteres para o telefone com máscara será 14.
        },
        mensagem: "required",
    },
    messages: {
        nome: "Por favor, preencha o seu nome.",
        email: {
            required: "Por favor, preencha o seu e-mail.",
            email: "Por favor, digite um e-mail válido.",
        },
        telefone: {
            minlength: "Por favor, preencha o telefone corretamente.",
        },
        mensagem: "Por favor, escreva a sua mensagem.",
    },
    submitHandler: function (form) {
        // Lógica para enviar o formulário, caso ele esteja válido
        // Exemplo: form.submit();
    },
});
});