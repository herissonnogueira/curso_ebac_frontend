const carroDoHerisson = {
    modelo: 'Fiesta',
    fabricante: 'Ford',
    anoModelo: 2020,
    anoFabricacao: 2019,
    acelular: function() {
        console.log("vrum");
    }
}

const carroDaMaria = {
    modelo: 'ka',
    fabricante: 'Ford',
    anoModelo: 2021,
    anoFabricacao: 2020,
    acelular: function() {
        console.log("vrum");
    }
}

function Carro(modelo, fabricante, anoModelo, anoFabricacao) {
    this.modelo = modelo;
    this.fabricante = fabricante;
    this.anoModelo = anoFabricacao
    this.acelerar = function() {
        console.log("acelerar");
    }
}

const carroDoHerisson2 = new Carro("Fiesta", "Ford", 2020, 2019);
const carroDaMaria2 = new Carro("ka", "Ford", 2021, 2020);

console.log(carroDoHerisson2);
console.log(carroDaMaria2);

const nome = "Herisson"
const idade = "19"
const ehMaiorDeIdade = true
const conhecimentos = ["html", "css", "javascript"]

const pessoa = {
    nome: nome,
    idade: idade,
    ehMaiorDeIdade: ehMaiorDeIdade,
    conhecimentos: conhecimentos,
}

function exibeAtributo(nomeAtributo) {
    console.log(pessoa[nomeAtributo])
}

exibeAtributo('nome');

pessoa['sobrenome'] = undefined;

Object.freeze(pessoa);

pessoa.nome = 'joao';

if (pessoa['sobrenome']) {
    console.log("a pessoa tem um sobrenome")
}

if ('sobrenome' in pessoa) {
    console.log("tem sobrenome");
}

console.log(pessoa.nome)
console.log(pessoa['nome'])

console.log(Object.keys(pessoa).length);
console.log(Object.values(pessoa));