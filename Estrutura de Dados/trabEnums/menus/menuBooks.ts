import { Lists } from "../Classes/Lists";
import { Book } from "../Classes/Book";
import { Lists2 } from "../Classes/Lists2";
import { BookGenre } from "../ENUMs/BookGenre";
export class MenuBooks {

startmenu(listar: Lists2 ){
const rl = require('readline-sync')
let menubooks:boolean = true
let selectbooks: number
let selectgenre: number
let varGenre: BookGenre

while(menubooks){
    selectbooks = rl.questionInt("\nSelecione a funcao> \n1. Listar Todos> \n2. Listar Disponiveis \n3. Listar Emprestados \n4. Listar Atrasados \n5. Listar Por Genero \n0. Voltar \n> ")
    switch(selectbooks){
        case 0:
            console.log("Fechando menu...");
            menubooks = false;
            break;

        case 1:
            console.log("\nLista Todos:");
            listar.listAll()
            break;
        case 2:
            console.log("\nLista Disponiveis:");
            listar.listAvailable2()
            break;
        case 3:
            console.log("\nLista Emprestados:");
            listar.listBorrowed2()
            break;
        case 4:
            console.log("\nLista Atrasados:");
            listar.listOverdue2()
            break;
        case 5:
            
            selectgenre = rl.questionInt("\nSelecione o genero \n1. Ficcao Cientifica \n2. Romance \n3. Fantasia \n4. Misterio \n5. Acao \n> ")
            switch(selectgenre){
                case 0:
                    break;
                case 1:
                    varGenre = BookGenre.genre1
                    console.log("\nLista por genero:");
                    listar.listGenre(varGenre)
                    break;
                case 2:
                    varGenre = BookGenre.genre2
                    console.log("\nLista por genero:");
                    listar.listGenre(varGenre)
                    break;
                case 3:
                    varGenre = BookGenre.genre3
                    console.log("\nLista por genero:");
                    listar.listGenre(varGenre)
                    break;
                case 4:
                    varGenre = BookGenre.genre4
                    console.log("\nLista por genero:");
                    listar.listGenre(varGenre)
                    break;
                case 5:
                    varGenre = BookGenre.genre5
                    console.log("\nLista por genero:");
                    listar.listGenre(varGenre)
                    break;
                default:
                    break;

                    
            }
                
            break;
        default:
            console.log("Por favor insira um numero valido");
            
            break;
            }
            
            
    } }


}  