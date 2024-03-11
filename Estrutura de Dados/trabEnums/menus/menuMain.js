"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.menuMain = void 0;
var menuBooks_1 = require("./menuBooks");
var menuMain = /** @class */ (function () {
    function menuMain() {
    }
    menuMain.prototype.startMenu = function (listar) {
        var rl = require('readline-sync');
        var menubooks = new menuBooks_1.MenuBooks;
        var menu = true;
        var select;
        while (menu) {
            select = rl.questionInt("\nSelecione a funcao> \n1.Livros> \n2.Cadastrar Usuario \n3.Historico de Empréstimos \n4.Emprestimo de Livro \n5.Reserva de Livro \n6.Verificacao de Multa \n7.Listagem de livros por genero \n> ");
            switch (select) {
                case 0:
                    console.log("Fechando menu...");
                    menu = false;
                    break;
                case 1:
                    menubooks.startmenu(listar);
                    break;
                default:
                    console.log("Por favor insira um numero valido");
                    break;
            }
        }
    };
    return menuMain;
}());
exports.menuMain = menuMain;
