"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuBooks = void 0;
var MenuBooks = /** @class */ (function () {
    function MenuBooks() {
    }
    MenuBooks.prototype.startmenu = function (listar) {
        var rl = require('readline-sync');
        var menubooks = true;
        var selectbooks;
        while (menubooks) {
            selectbooks = rl.questionInt("\nSelecione a funcao> \n1.Listar Todos> \n2.Listar Disponíveis \n3.Listar Emprestados \n4.Listar Atrasados \n0.Voltar \n> ");
            switch (selectbooks) {
                case 0:
                    console.log("Fechando menu...");
                    menubooks = false;
                    break;
                case 1:
                    console.log("test");
                    listar.listAll();
                    break;
                case 2:
                    console.log("test");
                    listar.listAvailable2();
                    break;
                case 3:
                    console.log("test");
                    listar.listBorrowed2();
                    break;
                case 4:
                    console.log("test");
                    listar.listOverdue2();
                    break;
                default:
                    console.log("Por favor insira um numero valido");
                    break;
            }
        }
    };
    return MenuBooks;
}());
exports.MenuBooks = MenuBooks;
