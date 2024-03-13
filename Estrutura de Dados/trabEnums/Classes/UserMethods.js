"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMethods = void 0;
var BookStatus_1 = require("../ENUMs/BookStatus");
var Book_1 = require("./Book");
var UserClass_1 = require("./UserClass");
var UserMethods = /** @class */ (function () {
    function UserMethods() {
        this.usersArray = [];
        this.lastUsersId = -1;
    }
    UserMethods.prototype.userRegister = function () {
        var rl = require('readline-sync');
        var userBaseBook = new Book_1.Book("", "");
        var usersName = rl.question("\nInsira o nome do Usuario> ");
        var usersComms = rl.questionInt("Insira o numero de contato do Usuario> ");
        this.lastUsersId++;
        var usersReg = new UserClass_1.UserClass(this.lastUsersId, usersName, usersComms);
        usersReg.userHistory.push(userBaseBook);
        this.usersArray.push(usersReg);
    };
    UserMethods.prototype.lendBook = function (list) {
        var rl = require('readline-sync');
        for (var _i = 0, _a = this.usersArray; _i < _a.length; _i++) {
            var user = _a[_i];
            console.log(user.userId, user.userName);
        }
        var selectUser = rl.questionInt("\nSelecione o usuario \n> ");
        if (selectUser >= this.usersArray.length) {
            console.log("Insira um usuario valido");
            return null;
        }
        console.log(selectUser, this.usersArray[selectUser].userName);
        console.log('\nLivros Disponiveis: \n');
        for (var i = 0; i < list.libraryBooks.length; i++) {
            if (list.libraryBooks[i].status === BookStatus_1.BookStatus.Available) {
                console.log(list.libraryBooks.indexOf(list.libraryBooks[i]), list.libraryBooks[i].title, list.libraryBooks[i].status);
            }
        }
        var selectBook = rl.questionInt("\nSelecione o Livro \n> ");
        if (list.libraryBooks[selectBook].status === BookStatus_1.BookStatus.Available) {
            this.usersArray[selectUser].userHistory.push(list.libraryBooks[selectBook]);
            list.libraryBooks[selectBook].status = BookStatus_1.BookStatus.Borrowed;
        }
    };
    UserMethods.prototype.retrieveBook = function (list) {
        var rl = require('readline-sync');
        console.log('\nLivros emprestados');
        for (var i = 0; i < list.libraryBooks.length; i++) {
            if (list.libraryBooks[i].status === BookStatus_1.BookStatus.Borrowed || list.libraryBooks[i].status === BookStatus_1.BookStatus.Reserved || list.libraryBooks[i].status === BookStatus_1.BookStatus.Overdue) {
                console.log(list.libraryBooks.indexOf(list.libraryBooks[i]), list.libraryBooks[i].title, list.libraryBooks[i].status);
            }
        }
        var selectBook = rl.questionInt("\nSelecione o livro para ser devolvido \n> ");
        for (var _i = 0, _a = this.usersArray; _i < _a.length; _i++) {
            var user = _a[_i];
            console.log(user.userId, user.userName);
        }
        var selectUser = rl.questionInt("\nSelecione o usuario que fara a devolucao \n> ");
        if (selectUser >= this.usersArray.length) {
            console.log("Insira um usuario valido");
            return null;
        }
        console.log(selectUser, this.usersArray[selectUser].userName);
        var days = rl.questionInt("\nInsira quantos dias ficou com o Livro> ");
        list.libraryBooks[selectBook].lastStatus = list.libraryBooks[selectBook].status;
        list.libraryBooks[selectBook].lastUser = this.usersArray[selectUser];
        list.libraryBooks[selectBook].status = BookStatus_1.BookStatus.Available;
        list.libraryBooks[selectBook].borrowedForDays = days;
    };
    UserMethods.prototype.showHistory = function () {
        var rl = require('readline-sync');
        for (var _i = 0, _a = this.usersArray; _i < _a.length; _i++) {
            var user = _a[_i];
            console.log(user.userId, user.userName);
        }
        /*for (let i = 0; i < this.usersArray.length; i++) {
            console.log(this.usersArray[i].userId,this.usersArray[i].userName);
            
        }*/
        var selectUser = rl.questionInt("\nSelecione o usuario \n> ");
        console.log("\nHistorico de livros de ".concat(this.usersArray[selectUser].userName));
        for (var _b = 0, _c = this.usersArray[selectUser].userHistory; _b < _c.length; _b++) {
            var livro = _c[_b];
            console.log(livro.title);
        }
    };
    UserMethods.prototype.reserveBook = function (list) {
        var rl = require('readline-sync');
        for (var _i = 0, _a = this.usersArray; _i < _a.length; _i++) {
            var user = _a[_i];
            console.log(user.userId, user.userName);
        }
        var selectUser = rl.questionInt("\nSelecione o usuario \n> ");
        if (selectUser >= this.usersArray.length) {
            console.log("Insira um usuario valido");
            return null;
        }
        for (var i = 0; i < list.libraryBooks.length; i++) {
            if (list.libraryBooks[i].status === BookStatus_1.BookStatus.Borrowed) {
                console.log(list.libraryBooks.indexOf(list.libraryBooks[i]), list.libraryBooks[i].title, list.libraryBooks[i].status);
            }
        }
        var selectBook = rl.questionInt("\nSelecione o livro para ser reservado \n> ");
        if (list.libraryBooks[selectBook].status !== BookStatus_1.BookStatus.Borrowed) {
            console.log("Insira um livro valido para reserva (Livros atualmente emprestados)");
        }
        else {
            list.libraryBooks[selectBook].status = BookStatus_1.BookStatus.Reserved;
            list.libraryBooks[selectBook].reservedBy = this.usersArray[selectUser];
            /*notification = new Notif(this.usersArray[selectUser],selectBook)
            console.log(notification.assignedUser.userName);
            
            this.usersArray[selectUser].userNotifys.push(notification)
           
            
            //notification = `${this.usersArray[selectUser].userName} o livro ${list.libraryBooks[selectBook].title} está Disponivel`
            //this.notificationArray.push(notification)
            //this.usersArray[selectUser].userNotifys.push(notification)
            //this.usersArray[selectUser].userReserves.push(list.libraryBooks[selectBook])
            console.log(`${this.usersArray[selectUser].userName} o livro ${list.libraryBooks[selectBook].title} foi ${list.libraryBooks[selectBook].status}`);*/
        }
    };
    UserMethods.prototype.notifyReserve = function (list) {
        var rl = require('readline-sync');
        for (var i = 0; i < list.libraryBooks.length; i++) {
            if (list.libraryBooks[i].status === BookStatus_1.BookStatus.Available && list.libraryBooks[i].lastStatus === BookStatus_1.BookStatus.Reserved) {
                console.log("".concat(list.libraryBooks[i].reservedBy.userName, " o livro ").concat(list.libraryBooks[i].title, " esta ").concat(list.libraryBooks[i].status));
                rl.question("\nPressione qualquer botao para continuar");
            }
        }
    };
    UserMethods.prototype.checkFee = function (list) {
        var rl = require('readline-sync');
        for (var _i = 0, _a = this.usersArray; _i < _a.length; _i++) {
            var user = _a[_i];
            console.log(user.userId, user.userName);
        }
        var selectUser = rl.questionInt("\nSelecione o usuario \n> ");
        if (selectUser >= this.usersArray.length) {
            console.log("Insira um usuario valido");
            return null;
        }
        for (var i = 0; i < list.libraryBooks.length; i++) {
            if (list.libraryBooks[i].status === BookStatus_1.BookStatus.Borrowed || list.libraryBooks[i].status === BookStatus_1.BookStatus.Overdue) {
                console.log(list.libraryBooks.indexOf(list.libraryBooks[i]), list.libraryBooks[i].title, list.libraryBooks[i].status);
            }
        }
        var selectBook = rl.questionInt("\nSelecione o livro \n> ");
        list.libraryBooks[selectBook].lastUser = this.usersArray[selectBook];
        for (var i = 0; i < list.libraryBooks[selectBook].borrowedForDays; i++) {
            if (list.libraryBooks[selectBook].borrowedForDays > 10) {
                list.libraryBooks[selectBook].lastUser.userFee += 1;
            }
        }
        list.libraryBooks[selectBook].borrowedForDays = 0;
        console.log(list.libraryBooks[selectBook].lastUser.userFee);
    };
    UserMethods.prototype.teste = function (list) {
        var rl = require('readline-sync');
        var selectbook = rl.questionInt("numeroblivro");
        list.libraryBooks[selectbook].lastUser = this.usersArray[0];
        list.libraryBooks[selectbook].lastUser.userFee = 1000;
        console.log(this.usersArray[0].userFee);
    };
    return UserMethods;
}());
exports.UserMethods = UserMethods;
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
