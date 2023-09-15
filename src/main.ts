function multiplicacao(x: number, y: number): number {
    return x * y;
}

function saudacao(nome: string): string {
    return "Olá " + nome;
}

const resultadoMultiplicacao = multiplicacao(1, 2);
console.log(resultadoMultiplicacao);

const saudacaoHerisson = saudacao("Herisson");
console.log(saudacaoHerisson);
