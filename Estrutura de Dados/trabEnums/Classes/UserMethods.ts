import { BookStatus } from "../ENUMs/BookStatus";
import { Book } from "./Book";
import { Lists2 } from "./Lists2";
import { UserClass } from "./UserClass";

export class UserMethods{

    usersArray: Array<UserClass> = []
    lastUsersId: number = -1;

    userRegister(){
        const rl = require('readline-sync')
        const userBaseBook = new Book("Teste","Teste")
        
    
        let usersName: String = rl.question("\nInsira o nome do Usuario> ");
        let usersComms: Number = rl.questionInt("Insira o numero de contato do Usuario> ");
        this.lastUsersId++
        let usersReg = new UserClass(this.lastUsersId,usersName,usersComms)
        usersReg.userHistory.push(userBaseBook)
        this.usersArray.push(usersReg)
        console.log(this.usersArray);
        
        
    
       }

    lendBook(list:Lists2){
        const rl = require('readline-sync');


        for (const user of this.usersArray) {
            console.log(user.userId,user.userName);
            
        }

        let selectUser:number = rl.questionInt("\nSelecione o usuario \n> ");

        if(selectUser >= this.usersArray.length){
            selectUser = rl.questionInt("\nSelecione um usuario valido \n> ")
        }
        console.log(selectUser,selectUser,this.usersArray[selectUser].userName);
        
        
        console.log('\nLivros Disponiveis: \n',);
            
            for (let i = 0; i < list.libraryBooks.length; i++) {
                if(list.libraryBooks[i].status === BookStatus.Available){
                    console.log(list.libraryBooks.indexOf(list.libraryBooks[i]),list.libraryBooks[i].title,list.libraryBooks[i].status);
                    
                }
            }
        
        let selectBook: number = rl.questionInt("\nSelecione o Livro \n> ")



        if(list.libraryBooks[selectBook].status === BookStatus.Available){
            this.usersArray[selectUser].userHistory.push(list.libraryBooks[selectBook])
            list.libraryBooks[selectBook].status = BookStatus.Borrowed
            
        }



    }
    retrieveBook(list:Lists2){
        const rl = require('readline-sync')

        console.log('\nLivros emprestados');
        
        for (let i = 0; i < list.libraryBooks.length; i++) {
            if(list.libraryBooks[i].status === BookStatus.Borrowed){
                console.log(list.libraryBooks.indexOf(list.libraryBooks[i]),list.libraryBooks[i].title,list.libraryBooks[i].status);
                
            }
        }
        let selectBook: number = rl.questionInt("\nSelecione o livro para ser devolvido \n> ")
        list.libraryBooks[selectBook].status = BookStatus.Available
    }

    showHistory(){
        const rl = require('readline-sync');

        for (const user of this.usersArray) {
            console.log(user.userId,user.userName);
            
        }

        /*for (let i = 0; i < this.usersArray.length; i++) {
            console.log(this.usersArray[i].userId,this.usersArray[i].userName);
            
        }*/

        let selectUser = rl.questionInt("\nSelecione o usuario \n> ")
       for (const livro of this.usersArray[selectUser].userHistory) {
        console.log(livro.title)
       }
            
            
        
        

    }
}