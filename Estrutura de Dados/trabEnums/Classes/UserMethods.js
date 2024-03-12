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
        var userBaseBook = new Book_1.Book("Teste", "Teste");
        var usersName = rl.question("\nInsira o nome do Usuario> ");
        var usersComms = rl.questionInt("Insira o numero de contato do Usuario> ");
        this.lastUsersId++;
        var usersReg = new UserClass_1.UserClass(this.lastUsersId, usersName, usersComms);
        usersReg.userHistory.push(userBaseBook);
        this.usersArray.push(usersReg);
        console.log(this.usersArray);
    };
    UserMethods.prototype.lendBook = function (list) {
        var rl = require('readline-sync');
        for (var _i = 0, _a = this.usersArray; _i < _a.length; _i++) {
            var user = _a[_i];
            console.log(user.userId, user.userName);
        }
        var selectUser = rl.questionInt("\nSelecione o usuario \n> ");
        if (selectUser >= this.usersArray.length) {
            selectUser = rl.questionInt("\nSelecione um usuario valido \n> ");
        }
        console.log(selectUser, selectUser, this.usersArray[selectUser].userName);
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
            if (list.libraryBooks[i].status === BookStatus_1.BookStatus.Borrowed) {
                console.log(list.libraryBooks.indexOf(list.libraryBooks[i]), list.libraryBooks[i].title, list.libraryBooks[i].status);
            }
        }
        var selectBook = rl.questionInt("\nSelecione o livro para ser devolvido \n> ");
        list.libraryBooks[selectBook].status = BookStatus_1.BookStatus.Available;
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
        for (var _b = 0, _c = this.usersArray[selectUser].userHistory; _b < _c.length; _b++) {
            var livro = _c[_b];
            console.log(livro.title);
        }
    };
    return UserMethods;
}());
exports.UserMethods = UserMethods;
