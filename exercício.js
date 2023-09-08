class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazerBarulho() {
        throw new Error();
    }
}

class Cachorro extends Animal {
    fazerBarulho() {
        return `${this.nome} faz woof!`;
    }
}

class Gato extends Animal {
    fazerBarulho() {
        return `${this.nome} faz miau!`;
    }
}

const hercules = new Cachorro("Hercules");
const gumball = new Gato("Gumbal");
const pata = new Gato("Pata");

console.log(hercules.fazerBarulho());
console.log(gumball.fazerBarulho());
console.log(pata.fazerBarulho());
