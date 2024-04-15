function primeiroElemento<T>(array:T[]): T {
    return array[0]
}

const numeros = [1,2,3,4,5]
const primeiroNumero = primeiroElemento(numeros)
console.log(primeiroNumero);

const strings = ["teste","aaaa"]
const primeiraString = primeiroElemento(strings)
console.log(primeiraString);

