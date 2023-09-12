// Criação do Array de Objetos: Nome e a nota de alunos;

const alunos = [
    { nome: "Herisson", nota: 10 },
    { nome: "Pedro", nota: 5 },
    { nome: "Gian", nota: 8 },
    { nome: "Cleber", nota: 5 },
    { nome: "Evllyn", nota: 9 }
];

// Criar uma Função para Filtrar Alunos com Nota Maior ou Igual a 6;
function filtrarAlunosAprovados(alunos) {
    // Usamos o método filter para criar um novo array com os alunos aprovados;
    const alunosAprovados = alunos.filter(alunos => alunos.nota >= 6);

    return alunosAprovados;
}

const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);