import { Lists2 } from "../Lists2"
import { MenuBooks } from "./menuBooks"

export class menuMain {
startMenu(listar:Lists2){
const rl = require('readline-sync')
const menubooks = new MenuBooks
let menu:boolean = true
let select: number


while(menu){
    select = rl.questionInt("\nSelecione a funcao> \n1.Livros> \n2.Cadastrar Usuario \n3.Historico de Empréstimos \n4.Emprestimo de Livro \n5.Reserva de Livro \n6.Verificacao de Multa \n7.Listagem de livros por genero \n> ")
    switch(select){
        case 0:
            console.log("Fechando menu...");
            menu = false;
            break;

        case 1:
            menubooks.startmenu(listar)
            break;
        default:
            console.log("Por favor insira um numero valido");
            break;
            
    } }

}}