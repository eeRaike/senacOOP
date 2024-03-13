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
        console.log("\nSelecione o usuario ");
        for (var _i = 0, _a = this.usersArray; _i < _a.length; _i++) {
            var user = _a[_i];
            console.log(user.userId, user.userName);
        }
        var selectUser = rl.questionInt("\n> ");
        if (selectUser >= this.usersArray.length) {
            console.log("Insira um usuario valido");
            return null;
        }
        console.log(selectUser, this.usersArray[selectUser].userName);
        console.log('\nLivros Disponiveis: \nSelecione o Livro ');
        for (var i = 0; i < list.libraryBooks.length; i++) {
            if (list.libraryBooks[i].status === BookStatus_1.BookStatus.Available) {
                console.log(list.libraryBooks.indexOf(list.libraryBooks[i]), list.libraryBooks[i].title, list.libraryBooks[i].status);
            }
        }
        var selectBook = rl.questionInt("\n> ");
        if (list.libraryBooks[selectBook].status === BookStatus_1.BookStatus.Available) {
            this.usersArray[selectUser].userHistory.push(list.libraryBooks[selectBook]);
            list.libraryBooks[selectBook].lastUser = this.usersArray[selectUser];
            list.libraryBooks[selectBook].status = BookStatus_1.BookStatus.Borrowed;
        }
    };
    UserMethods.prototype.retrieveBook = function (list) {
        var rl = require('readline-sync');
        //checkpoint
        console.log("\nSelecione o usuario que fara a devolucao");
        for (var _i = 0, _a = this.usersArray; _i < _a.length; _i++) {
            var user = _a[_i];
            console.log(user.userId, user.userName);
        }
        var selectUser = rl.questionInt("\n> ");
        if (selectUser >= this.usersArray.length) {
            console.log("Insira um usuario valido");
            return null;
        }
        console.log('\nLivros emprestados \nSelecione o livro para ser devolvido ');
        for (var i = 0; i < list.libraryBooks.length; i++) {
            if (list.libraryBooks[i].lastUser === this.usersArray[selectUser]) {
                console.log(list.libraryBooks.indexOf(list.libraryBooks[i]), list.libraryBooks[i].title, list.libraryBooks[i].status);
            }
        }
        var selectBook = rl.questionInt("\n> ");
        var days = rl.questionInt("\nInsira quantos dias ficou com o Livro> ");
        list.libraryBooks[selectBook].lastStatus = list.libraryBooks[selectBook].status;
        list.libraryBooks[selectBook].lastUser = this.usersArray[selectUser];
        list.libraryBooks[selectBook].status = BookStatus_1.BookStatus.Available;
        list.libraryBooks[selectBook].borrowedForDays = days;
        if (list.libraryBooks[selectBook].borrowedForDays >= 10) {
            this.setFee(selectBook, list);
        }
        list.libraryBooks[selectBook].borrowedForDays = 0;
    };
    UserMethods.prototype.showHistory = function () {
        var rl = require('readline-sync');
        console.log("\nSelecione o usuario ");
        for (var _i = 0, _a = this.usersArray; _i < _a.length; _i++) {
            var user = _a[_i];
            console.log(user.userId, user.userName);
        }
        var selectUser = rl.questionInt("\n> ");
        if (selectUser >= this.usersArray.length) {
            console.log("Insira um usuario valido");
            return null;
        }
        console.log("\nHistorico de livros de ".concat(this.usersArray[selectUser].userName));
        for (var _b = 0, _c = this.usersArray[selectUser].userHistory; _b < _c.length; _b++) {
            var livro = _c[_b];
            console.log(livro.title);
        }
    };
    UserMethods.prototype.reserveBook = function (list) {
        var rl = require('readline-sync');
        console.log("\nSelecione o usuario");
        for (var _i = 0, _a = this.usersArray; _i < _a.length; _i++) {
            var user = _a[_i];
            console.log(user.userId, user.userName);
        }
        var selectUser = rl.questionInt("\n> ");
        if (selectUser >= this.usersArray.length) {
            console.log("Insira um usuario valido");
            return null;
        }
        console.log("\nSelecione o livro para ser reservado");
        for (var i = 0; i < list.libraryBooks.length; i++) {
            if (list.libraryBooks[i].status === BookStatus_1.BookStatus.Borrowed) {
                console.log(list.libraryBooks.indexOf(list.libraryBooks[i]), list.libraryBooks[i].title, list.libraryBooks[i].status);
            }
        }
        var selectBook = rl.questionInt("\n> ");
        if (list.libraryBooks[selectBook].status !== BookStatus_1.BookStatus.Borrowed) {
            console.log("Insira um livro valido para reserva (Livros atualmente emprestados)");
        }
        else {
            list.libraryBooks[selectBook].status = BookStatus_1.BookStatus.Reserved;
            list.libraryBooks[selectBook].reservedBy = this.usersArray[selectUser];
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
    UserMethods.prototype.setFee = function (book, list) {
        for (var i = 0; i < list.libraryBooks[book].borrowedForDays; i++) {
            if (i >= 10) {
                list.libraryBooks[book].lastUser.userFee += 1.00;
            }
        }
        console.log(list.libraryBooks[book].lastUser.userName, list.libraryBooks[book].lastUser.userFee);
    };
    UserMethods.prototype.checkFee = function (list) {
        var rl = require('readline-sync');
        console.log("\nSelecione o usuario");
        for (var _i = 0, _a = this.usersArray; _i < _a.length; _i++) {
            var user = _a[_i];
            console.log(user.userId, user.userName);
        }
        var selectUser = rl.questionInt("\n> ");
        if (selectUser >= this.usersArray.length) {
            console.log("Insira um usuario valido");
            return null;
        }
        if (this.usersArray[selectUser].userFee > 0) {
            console.log("".concat(this.usersArray[selectUser].userName, " voce deve R$").concat(this.usersArray[selectUser].userFee, " de multa "));
        }
        else {
            console.log("".concat(this.usersArray[selectUser].userName, " voce nao deve nada "));
        }
    };
    return UserMethods;
}());
exports.UserMethods = UserMethods;
