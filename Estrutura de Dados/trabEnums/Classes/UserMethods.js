"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMethods = void 0;
var BookStatus_1 = require("../ENUMs/BookStatus");
var UserClass_1 = require("./UserClass");
var UserMethods = /** @class */ (function () {
    function UserMethods() {
        this.usersArray = [];
        this.lastUsersId = -1;
    }
    UserMethods.prototype.userRegister = function () {
        var rl = require('readline-sync');
        var usersName = rl.question("\nInsira o nome do Usuario> ");
        var usersComms = rl.questionInt("Insira o numero de contato do Usuario> ");
        this.lastUsersId++;
        var usersReg = new UserClass_1.UserClass(this.lastUsersId, usersName, usersComms);
        this.usersArray.push(usersReg);
        console.log(this.usersArray);
    };
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
    UserMethods.prototype.borrowBook = function (list) {
        var rl = require('readline-sync');
        for (var i = 0; i < this.usersArray.length; i++) {
            console.log(this.usersArray[i].userId, this.usersArray[i].userName);
        }
        var selectUser = rl.questionInt("\nSelecione o usuario \n> ");
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
        }
    };
    return UserMethods;
}());
exports.UserMethods = UserMethods;
