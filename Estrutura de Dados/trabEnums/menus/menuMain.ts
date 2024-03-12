import { Lists2 } from "../Classes/Lists2"
import { UserMethods } from "../Classes/UserMethods"
import { MenuBooks } from "./menuBooks"

export class menuMain {
startMenu(listar:Lists2){
const rl = require('readline-sync')
const menubooks = new MenuBooks
const userMethods = new UserMethods
let menu:boolean = true
let select: number


while(menu){
    select = rl.questionInt("\nSelecione a funcao> \n1. Livros> \n2. Cadastrar Usuario \n3. Historico de Empréstimos \n4. Emprestimo de Livro \n5. Reserva de Livro \n6. Verificacao de Multa \n0. Fechar menu \n> ")
    switch(select){
        case 0:
            console.log("Fechando menu...");
            menu = false;
            break;

        case 1:
            menubooks.startmenu(listar)
            break;
        case 2:
            userMethods.userRegister()
            break;
        case 3:
            userMethods.borrowBook(listar)
            break;
        default:
            console.log("Por favor insira um numero valido");
            break;
            
    } }

}}