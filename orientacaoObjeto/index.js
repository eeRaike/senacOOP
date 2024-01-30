/*
//String

let myName: string = "Perdi";

//Boolean

let isTrue: boolean = true;

//Number
let myAge: number = 17;

//Array
let array1: Array<number> = [1,2,3]
let array2: number[] = [1,2,3]

//Objeto

let test: {name:string, age:number} = {
    name:"Perdi",
    age:17
}

//

let listaDeCompras: string[];
let listDeCompras: Array<string>;

console.log("Hello World");

function sum(a:number, b:number):number{
    return a + b
}

console.log(sum(5,6));

function sayHello(name?:string):void{
    console.log(`Hello`, name || "World" );
    
}

sayHello(test.name)




function applyDiscount(price:  number,discount: number = 0.05):number{
    return price * (1 - discount)
}

console.log(applyDiscount(5));
console.log(applyDiscount(5,1));

const nome:string = "Perdi"
const idade:number = 17

console.log("Olá!","Meu nome é", nome , "e eu tenho", idade, "anos");

let myName: string = "Perdi";
let mySecondName: string = "Vargas";
let myAge: number = 17;
let student: boolean = true;

console.log(`Meu nome é ${myName}, meu sobrenome é ${mySecondName}, tenho ${myAge} e meu status de estudante é: ${student} `);

const jjk:string = "Jujutsu Kaisen"
const jjkSeasons: number = 2



console.log(typeof jjk ,typeof jjkSeasons);


const myNumberString: string = "23"

console.log(myNumberString);
console.log(Number(myNumberString));

const numberToString: number = 10
console.log(numberToString.toString());

//1 - O que será impresso
let a:number = 10
let b:number = 10

console.log(b) // Será impresso 10
b = 5
console.log(a,b); // Será impresso 10,5


//2 - O que será impresso

let a: number = 10
let b:number = 20
let c = a
b = c
a = b

console.log(a,b,c); // 10,10,10


let a:number = 10
let b:number = 25
let c:number

c = a
a = b
b = c

console.log(a,b);



//Acessando elementos do Array
    let frutas:string[] = [ "Maça","Banana","Maracujá"]

    console.log(frutas[0]); //saída: Maçã
    console.log(frutas[1]); //Saída: Banana

//Adicionando Elementos no Array

    frutas.push("Abacaxi");
    console.log(frutas); //Saída ["Maçã","Banana", "Maracujá", "Abacaxi"]

//Removendo o último Elemento do Array
    frutas.pop();
    console.log(frutas); //Saída ["Maçã","Banana", "Maracujá"]


//Array Iteration
    for (let i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);
    
    
    
}

//includes
//Verifica se algo existe dentro de um array
    const seriesBoas:string[] = ["Breaking Bad","Brooklyn Nine-nine"]
    seriesBoas.includes("Breaking Bad"); //true;
    seriesBoas.includes("Game of Thrones"); //false;

//Splice
    const letras:string[] = ["A","B","C","D"]
    letras.splice(2,1)

 //Arrays com diferentes tipos de dados
    let mix: (string | number)[] = ["Maçã",1,"Banana",10]

 //map
 let numeros: number[] = [1,2,3,4,5]

 let dobrados: number[] = numeros.map(numero => numero * 2)
 //saida [2,4,5,6,8,10]

 let frutas2: string[] = ["Maça","Pera","Morango"]
 let frtasComPrefixo: string[] = frutas.map(fruta => `Fruta: ${fruta}`)
 //Saida [Fruta:Maçã [...] ]

 let numeros2:string[] = ["1","2","3"]
 let numerosConvertidos: number[] = numeros2.map(numero => Number(numero))
 //Saida [1,2,3]

 let numeros3: number[] = [1,2,3,4,5]
 let numerosMenores: number[] = numeros3.filter(numero => numero < 3);

 //Reduce
 //método usado para reduzir o array a um único valor

 let numeros4: number[] = [1,2,3,4,5]

 let soma: number = numeros4.reduce((acumulador,numero) => {
    return acumulador + numero;
 },0)

 */
var arrayFilme = ["Filme1", "filme2"];
function contemFilme(a, b) {
    return a.includes(b);
}
console.log(contemFilme(arrayFilme, "Filme3"));
var arrayJogo = ["Celeste", "Hollow Knight", "Undertale", "Portal"];
function addJogo(a, b) {
    console.log(a);
    a.push(b);
    return a;
}
console.log(addJogo(arrayJogo, "Oneshot"));
function removerJogo(a) {
    console.log(a);
    a.pop();
    return a;
}
console.log(removerJogo(arrayJogo));
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
var evenNumbers;
function filterEvenNumbers(a) {
    console.log(a);
    evenNumbers = a.filter(function (i) { return i % 2 === 0; });
    // console.log(evenNumbers);
    return evenNumbers;
}
console.log(filterEvenNumbers(numbers));
var doubleEvenNumbers;
function dobrarParesMenoresQuecinco(a) {
    doubleEvenNumbers = a.filter(function (i) { return i % 2 === 0 && i < 5; });
    doubleEvenNumbers = doubleEvenNumbers.map(function (i) { return i * 2; });
    // console.log(doubleEvenNumbers);
    return doubleEvenNumbers;
}
console.log(dobrarParesMenoresQuecinco(numbers));
