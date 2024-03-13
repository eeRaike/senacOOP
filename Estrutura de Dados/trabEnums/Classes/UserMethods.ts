import { BookStatus } from "../ENUMs/BookStatus";
import { Book } from "./Book";
import { Lists2 } from "./Lists2";
import { UserClass } from "./UserClass";

export class UserMethods{

    usersArray: Array<UserClass> = [];
    lastUsersId: number = -1;
    

    userRegister(){
        const rl = require('readline-sync')
        const userBaseBook = new Book("","")
        
    
        let usersName: String = rl.question("\nInsira o nome do Usuario> ");
        let usersComms: Number = rl.questionInt("Insira o numero de contato do Usuario> ");
        this.lastUsersId++
        let usersReg = new UserClass(this.lastUsersId,usersName,usersComms)
        usersReg.userHistory.push(userBaseBook)
        this.usersArray.push(usersReg)
        
        
    
       }

    lendBook(list:Lists2){
        const rl = require('readline-sync');

        console.log("\nSelecione o usuario ");
        
        for (const user of this.usersArray) {
            console.log(user.userId,user.userName);
            
        }

        let selectUser:number = rl.questionInt("\n> ");

        if(selectUser >= this.usersArray.length){
            console.log("Insira um usuario valido");
            return null;
        }
        console.log(selectUser,this.usersArray[selectUser].userName);
        
        
        console.log('\nLivros Disponiveis: \nSelecione o Livro ');
            
            for (let i = 0; i < list.libraryBooks.length; i++) {
                if(list.libraryBooks[i].status === BookStatus.Available){
                    console.log(list.libraryBooks.indexOf(list.libraryBooks[i]),list.libraryBooks[i].title,list.libraryBooks[i].status);
                    
                }
            }
        
        let selectBook: number = rl.questionInt("\n> ")


        if(list.libraryBooks[selectBook].status === BookStatus.Available){
            this.usersArray[selectUser].userHistory.push(list.libraryBooks[selectBook])
            list.libraryBooks[selectBook].lastUser = this.usersArray[selectUser]
            list.libraryBooks[selectBook].status = BookStatus.Borrowed
            
        }



    }
    retrieveBook(list:Lists2){
        const rl = require('readline-sync')
        //checkpoint
        
        
        

        
        console.log("\nSelecione o usuario que fara a devolucao");
        
        for (const user of this.usersArray) {
            console.log(user.userId,user.userName);
            
        }

        let selectUser:number = rl.questionInt("\n> ");

       
        if(selectUser >= this.usersArray.length){
            console.log("Insira um usuario valido");
            return null;
        }

        console.log('\nLivros emprestados \nSelecione o livro para ser devolvido ');

        for (let i = 0; i < list.libraryBooks.length; i++) {
            if(list.libraryBooks[i].lastUser === this.usersArray[selectUser] ){
                console.log(list.libraryBooks.indexOf(list.libraryBooks[i]),list.libraryBooks[i].title,list.libraryBooks[i].status);
                
            }
        }
        let selectBook: number = rl.questionInt("\n> ")

        let days: number = rl.questionInt("\nInsira quantos dias ficou com o Livro> ")
        
        
        list.libraryBooks[selectBook].lastStatus = list.libraryBooks[selectBook].status
        list.libraryBooks[selectBook].lastUser = this.usersArray[selectUser]
        list.libraryBooks[selectBook].status = BookStatus.Available
        list.libraryBooks[selectBook].borrowedForDays = days
        
        
        if(list.libraryBooks[selectBook].borrowedForDays >= 10){
            this.setFee(selectBook,list)
        }

        list.libraryBooks[selectBook].borrowedForDays = 0;
        
    }

    showHistory(){
        const rl = require('readline-sync');

        console.log("\nSelecione o usuario ");
        
        for (const user of this.usersArray) {
            console.log(user.userId,user.userName);
            
        }

        let selectUser = rl.questionInt("\n> ")

        if(selectUser >= this.usersArray.length){
            console.log("Insira um usuario valido");
            return null;
        }
        console.log(`\nHistorico de livros de ${this.usersArray[selectUser].userName}`);
        
       for (const livro of this.usersArray[selectUser].userHistory) {
        console.log(livro.title)
       }
       
            
    }

    reserveBook(list:Lists2){
        const rl = require('readline-sync')
        
        console.log("\nSelecione o usuario");
        
        for (const user of this.usersArray) {
            console.log(user.userId,user.userName);
            
        }
        let selectUser:number = rl.questionInt("\n> ");

        if(selectUser >= this.usersArray.length){
            console.log("Insira um usuario valido");
            return null; 
        }
console.log("\nSelecione o livro para ser reservado");

        for (let i = 0; i < list.libraryBooks.length; i++) {
            if(list.libraryBooks[i].status === BookStatus.Borrowed){
                console.log(list.libraryBooks.indexOf(list.libraryBooks[i]),list.libraryBooks[i].title,list.libraryBooks[i].status);
                
            }
    }

        let selectBook = rl.questionInt("\n> ")
    if(list.libraryBooks[selectBook].status !== BookStatus.Borrowed){
        console.log("Insira um livro valido para reserva (Livros atualmente emprestados)");
    }else {
        
        list.libraryBooks[selectBook].status = BookStatus.Reserved
        list.libraryBooks[selectBook].reservedBy = this.usersArray[selectUser]

            
            
    }
        
 }

 notifyReserve(list:Lists2){
    const rl = require('readline-sync')
    for (let i = 0; i < list.libraryBooks.length; i++) {
        if(list.libraryBooks[i].status === BookStatus.Available && list.libraryBooks[i].lastStatus === BookStatus.Reserved){
            console.log(`${list.libraryBooks[i].reservedBy.userName} o livro ${list.libraryBooks[i].title} esta ${list.libraryBooks[i].status}`);
            rl.question("\nPressione qualquer botao para continuar")
        }
        
    }
    
 }

 setFee(book: number,list: Lists2){

    for (let i = 0; i < list.libraryBooks[book].borrowedForDays; i++) {
        if(i >= 10){
            list.libraryBooks[book].lastUser.userFee += 1.00
              
        }
        
    }
        console.log(list.libraryBooks[book].lastUser.userName,list.libraryBooks[book].lastUser.userFee);
        



 }
 checkFee(list:Lists2){
    const rl = require('readline-sync')
        
        console.log("\nSelecione o usuario");
        
        for (const user of this.usersArray) {
            console.log(user.userId,user.userName);
            
        }
        let selectUser:number = rl.questionInt("\n> ");

        if(selectUser >= this.usersArray.length){
            console.log("Insira um usuario valido");
            return null;
        }

        if(this.usersArray[selectUser].userFee > 0){
            console.log(`${this.usersArray[selectUser].userName} voce deve R$${this.usersArray[selectUser].userFee} de multa `);
            
        } else{
            console.log(`${this.usersArray[selectUser].userName} voce nao deve nada `);
            
        }
        
        

}
    

    
 }

