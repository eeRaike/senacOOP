import { Heir } from "./Classes/Heir";
import { NobleHouse } from "./Classes/NobleHouse";
import { Arryn } from "./Classes/SubClasses/Arryn";


let testHeir = new Heir("test",18)
let heir2 = new Heir("test2",17)
let testArryn = new Arryn("Um falcão branco voando e uma lua crescente em fundo azul escuro","Casa Arryn","Tão Alto Como a Honra")
const testHouse = new NobleHouse("testName","testMotto","testDescBrasao")
console.log(`House> ${testHouse.name} \nHeir> ${testHeir.heirName}`);



testHouse.addHeir(testHeir)
testHouse.addHeir(heir2)


testHouse.houseInfo()

console.log(testArryn.soldados)