"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMethods = void 0;
var UserClass_1 = require("./UserClass");
var UserMethods = /** @class */ (function () {
    function UserMethods() {
        this.usersArray = [];
        this.lastUsersId = 0;
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
    return UserMethods;
}());
exports.UserMethods = UserMethods;
