import { NobleHouse } from "./Classes/NobleHouse"
import { Arryn } from "./Classes/SubClasses/Arryn"
import { Stark } from "./Classes/SubClasses/Stark"
import { Targaryen } from "./Classes/SubClasses/Targaryen"

const array1: Array<NobleHouse> = []
const array2: Array<NobleHouse> = []

let Casa_Arryn = new Arryn("a","Arryn","a")
let Casa_Stark = new Stark("b","Stark","b")
let Casa_Targaryen = new Targaryen("c","Targaryen","c")

array1.push(Casa_Arryn,Casa_Stark,Casa_Targaryen)

function testfunction(): void{
for (let i = 0; i < array1.length + 2; i++) {
   
    
    if(array1[0].forcaMilitar > array1[array1.length-1].forcaMilitar){
        console.log(`Combate > ${array1[0].name} VS ${array1[array1.length-1].name} \nForca Militar > ${array1[0].forcaMilitar} || ${array1[array1.length-1].forcaMilitar} \nVence> ${array1[0].name}`);
        array1.pop()
    }
    else if(array1[0].forcaMilitar < array1[array1.length-1].forcaMilitar) {
        console.log(`Combate > ${array1[0].name} VS ${array1[array1.length-1].name} \nForca Militar > ${array1[0].forcaMilitar} || ${array1[array1.length-1].forcaMilitar} \nVence> ${array1[array1.length-1].name}`);
        array1.shift()
    }
    else{
        console.log(`A Casa vencedora é a ${array1[0].name} \nForca Militar > ${array1[0].forcaMilitar} `);
        
    }
    
    
} }

testfunction()