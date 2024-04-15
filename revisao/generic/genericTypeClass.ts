export class Caixa<T> {
    private conteudo: T

    constructor(conteudo: T){
        this.conteudo = conteudo
    }

    getConteudo():T{
        return this.conteudo
    }
}


const stringA = new Caixa<String>('Olá mundo')
console.log(stringA.getConteudo());

const numberA = new Caixa<Number>(25)
console.log(numberA.getConteudo());

