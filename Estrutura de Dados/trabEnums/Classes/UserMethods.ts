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


        for (const user of this.usersArray) {
            console.log(user.userId,user.userName);
            
        }

        let selectUser:number = rl.questionInt("\nSelecione o usuario \n> ");

        if(selectUser >= this.usersArray.length){
            console.log("Insira um usuario valido");
            return null;
        }
        console.log(selectUser,this.usersArray[selectUser].userName);
        
        
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
            if(list.libraryBooks[i].status === BookStatus.Borrowed || list.libraryBooks[i].status === BookStatus.Reserved || list.libraryBooks[i].status === BookStatus.Overdue ){
                console.log(list.libraryBooks.indexOf(list.libraryBooks[i]),list.libraryBooks[i].title,list.libraryBooks[i].status);
                
            }
        }

        let selectBook: number = rl.questionInt("\nSelecione o livro para ser devolvido \n> ")
        for (const user of this.usersArray) {
            console.log(user.userId,user.userName);
            
        }

        let selectUser:number = rl.questionInt("\nSelecione o usuario que fara a devolucao \n> ");

        if(selectUser >= this.usersArray.length){
            console.log("Insira um usuario valido");
            return null;
        }
        console.log(selectUser,this.usersArray[selectUser].userName);

        let days: number = rl.questionInt("\nInsira quantos dias ficou com o Livro> ")
        
        
        list.libraryBooks[selectBook].lastStatus = list.libraryBooks[selectBook].status
        list.libraryBooks[selectBook].lastUser = this.usersArray[selectUser]
        list.libraryBooks[selectBook].status = BookStatus.Available
        list.libraryBooks[selectBook].borrowedForDays = days
        
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
        console.log(`\nHistorico de livros de ${this.usersArray[selectUser].userName}`);
        
       for (const livro of this.usersArray[selectUser].userHistory) {
        console.log(livro.title)
       }
       
            
    }

    reserveBook(list:Lists2){
        const rl = require('readline-sync')
        

        for (const user of this.usersArray) {
            console.log(user.userId,user.userName);
            
        }
        let selectUser:number = rl.questionInt("\nSelecione o usuario \n> ");

        if(selectUser >= this.usersArray.length){
            console.log("Insira um usuario valido");
            return null; 
        }

        for (let i = 0; i < list.libraryBooks.length; i++) {
            if(list.libraryBooks[i].status === BookStatus.Borrowed){
                console.log(list.libraryBooks.indexOf(list.libraryBooks[i]),list.libraryBooks[i].title,list.libraryBooks[i].status);
                
            }
    }

        let selectBook = rl.questionInt("\nSelecione o livro para ser reservado \n> ")
    if(list.libraryBooks[selectBook].status !== BookStatus.Borrowed){
        console.log("Insira um livro valido para reserva (Livros atualmente emprestados)");
    }else {
        
        list.libraryBooks[selectBook].status = BookStatus.Reserved
        list.libraryBooks[selectBook].reservedBy = this.usersArray[selectUser]

            /*notification = new Notif(this.usersArray[selectUser],selectBook)
            console.log(notification.assignedUser.userName);
            
            this.usersArray[selectUser].userNotifys.push(notification)
           
            
            //notification = `${this.usersArray[selectUser].userName} o livro ${list.libraryBooks[selectBook].title} está Disponivel`
            //this.notificationArray.push(notification)
            //this.usersArray[selectUser].userNotifys.push(notification)
            //this.usersArray[selectUser].userReserves.push(list.libraryBooks[selectBook])
            console.log(`${this.usersArray[selectUser].userName} o livro ${list.libraryBooks[selectBook].title} foi ${list.libraryBooks[selectBook].status}`);*/
            
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


 checkFee(list:Lists2){
    const rl = require('readline-sync')

    for (const user of this.usersArray) {
        console.log(user.userId,user.userName);
        
    }
    let selectUser:number = rl.questionInt("\nSelecione o usuario \n> ");

    if(selectUser >= this.usersArray.length){
        console.log("Insira um usuario valido");
        return null; 
    }
    
    for (let i = 0; i < list.libraryBooks.length; i++) {
        if(list.libraryBooks[i].status === BookStatus.Borrowed || list.libraryBooks[i].status === BookStatus.Overdue ){
            console.log(list.libraryBooks.indexOf(list.libraryBooks[i]),list.libraryBooks[i].title,list.libraryBooks[i].status);
            
        }
}

    let selectBook = rl.questionInt("\nSelecione o livro \n> ")
    list.libraryBooks[selectBook].lastUser = this.usersArray[selectBook]

    for (let i = 0; i < list.libraryBooks[selectBook].borrowedForDays; i++) {
        if(list.libraryBooks[selectBook].borrowedForDays > 10){
            list.libraryBooks[selectBook].lastUser.userFee += 1
            
            
            
            
        }
        
    }
    list.libraryBooks[selectBook].borrowedForDays = 0;
    console.log(list.libraryBooks[selectBook].lastUser.userFee);
}
    
        teste(list: Lists2){
            const rl = require('readline-sync')
            let selectbook = rl.questionInt("numeroblivro")
            list.libraryBooks[selectbook].lastUser = this.usersArray[0]
            list.libraryBooks[selectbook].lastUser.userFee = 1000
            console.log(this.usersArray[0].userFee);
            

        }
        
    
 }
/*
 notifyReserve(){
   for (let i = 0; i < this.usersArray.length; i++) {
    console.log(this.usersArray[i].userReserves.forEach(book => this.testf(book)));
    
    
    
    
   }
    
 }

 testf(test:Book){
    if(test.status === BookStatus.Available){
        for (const notif of this.notificationArray) {
            console.log(notif);
        }
        
    }
    
 }
 
*/

/*notifyReserve(){
    if(this.notificationArray.length <= 0){
        return null;
    }else{
    for (let i = 0; this.notificationArray[i].assignedUser.userName != this.usersArray[i].userName; i++) {
        console.log("teste");
        
        
    }}

}
*/
