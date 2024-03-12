import { BookStatus } from "../ENUMs/BookStatus";
import { Lists2 } from "./Lists2";
import { UserClass } from "./UserClass";

export class UserMethods{

    usersArray: Array<UserClass> = []
    lastUsersId: number = -1;

    userRegister(){
        const rl = require('readline-sync')
        
    
        let usersName: String = rl.question("\nInsira o nome do Usuario> ");
        let usersComms: Number = rl.questionInt("Insira o numero de contato do Usuario> ");
        this.lastUsersId++
        let usersReg = new UserClass(this.lastUsersId,usersName,usersComms)
        this.usersArray.push(usersReg)
        console.log(this.usersArray);
        
        
    
       }
    
      /* borrowBook(list: Lists2){
        const rl = require('readline-sync')
            console.log('\nLista de usuarios: \n');
            
            for (let i = 0; i < this.usersArray.length; i++) {
                console.log(this.usersArray[i].userId,this.usersArray[i].userName);
                
            }

            let selectUser = rl.questionInt("\nSelecione o usuario \n> ") - 1
            console.log(selectUser,this.usersArray[selectUser].userName);

            console.log('\nLivros Disponiveis: \n',);
            
            for (let i = 0; i < list.libraryBooks.length; i++) {
                if(list.libraryBooks[i].status === BookStatus.Available){
                    console.log(list.libraryBooks.indexOf(list.libraryBooks[i]),list.libraryBooks[i].title,list.libraryBooks[i].status);
                    
                }
            }
    
            let selectBook = rl.questionInt("\n Selecione o livro \n> ")
            if(list.libraryBooks[selectBook].status === BookStatus.Available){
                this.usersArray[selectUser].userHistory.push(list.libraryBooks[selectBook])
                console.log(this.usersArray[selectUser].userHistory);
                
            }

    }*/


    borrowBook(list:Lists2){
        const rl = require('readline-sync');
        for (let i = 0; i < this.usersArray.length; i++) {
            console.log(this.usersArray[i].userId,this.usersArray[i].userName);
            
        }

        let selectUser:number = rl.questionInt("\nSelecione o usuario \n> ");
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
        }



    }


}