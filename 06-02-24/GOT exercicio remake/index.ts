import { Heir } from "./Classes/HeirY";
import { NobleHouse } from "./Classes/NobleHouseY";


let testHeir = new Heir("test",18)
const testHouse = new NobleHouse("testName","testMotto")
console.log(`House> ${testHouse.name} \nHeir> ${testHeir.heirName}`);



testHouse.addHeir(testHeir)




