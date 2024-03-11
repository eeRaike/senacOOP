import { Lists } from "../Lists";
import { Book } from "../Book";
import { Lists2 } from "../Lists2";
export class MenuBooks {

startmenu(listar: Lists2 ){
const rl = require('readline-sync')
let menubooks:boolean = true
let selectbooks: number

while(menubooks){
    selectbooks = rl.questionInt("\nSelecione a funcao> \n1.Listar Todos> \n2.Listar Disponíveis \n3.Listar Emprestados \n4.Listar Atrasados \n0.Voltar \n> ")
    switch(selectbooks){
        case 0:
            console.log("Fechando menu...");
            menubooks = false;
            break;

        case 1:
            console.log("test");
            listar.listAll()
            break;
        case 2:
            console.log("test");
            listar.listAvailable2()
            break;
        case 3:
            console.log("test");
            listar.listBorrowed2()
            break;
        case 4:
            console.log("test");
            listar.listOverdue2()
            break;
        default:
            console.log("Por favor insira um numero valido");
            
            break;
            }
            
            
    } }


}  