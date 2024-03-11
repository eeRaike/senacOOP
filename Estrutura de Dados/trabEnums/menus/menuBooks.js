"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuBooks = void 0;
var BookGenre_1 = require("../ENUMs/BookGenre");
var MenuBooks = /** @class */ (function () {
    function MenuBooks() {
    }
    MenuBooks.prototype.startmenu = function (listar) {
        var rl = require('readline-sync');
        var menubooks = true;
        var selectbooks;
        var selectgenre;
        var varGenre;
        while (menubooks) {
            selectbooks = rl.questionInt("\nSelecione a funcao> \n1. Listar Todos> \n2. Listar Disponiveis \n3. Listar Emprestados \n4. Listar Atrasados \n5. Listar Por Genero \n0. Voltar \n> ");
            switch (selectbooks) {
                case 0:
                    console.log("Fechando menu...");
                    menubooks = false;
                    break;
                case 1:
                    console.log("\nLista Todos:");
                    listar.listAll();
                    break;
                case 2:
                    console.log("\nLista Disponiveis:");
                    listar.listAvailable2();
                    break;
                case 3:
                    console.log("\nLista Emprestados:");
                    listar.listBorrowed2();
                    break;
                case 4:
                    console.log("\nLista Atrasados:");
                    listar.listOverdue2();
                    break;
                case 5:
                    selectgenre = rl.questionInt("\nSelecione o genero \n1. Ficcao Cientifica \n2. Romance \n3. Fantasia \n4. Misterio \n5. Acao \n> ");
                    switch (selectgenre) {
                        case 0:
                            break;
                        case 1:
                            varGenre = BookGenre_1.BookGenre.genre1;
                            console.log("\nLista por genero:");
                            listar.listGenre(varGenre);
                            break;
                        case 2:
                            varGenre = BookGenre_1.BookGenre.genre2;
                            console.log("\nLista por genero:");
                            listar.listGenre(varGenre);
                            break;
                        case 3:
                            varGenre = BookGenre_1.BookGenre.genre3;
                            console.log("\nLista por genero:");
                            listar.listGenre(varGenre);
                            break;
                        case 4:
                            varGenre = BookGenre_1.BookGenre.genre4;
                            console.log("\nLista por genero:");
                            listar.listGenre(varGenre);
                            break;
                        case 5:
                            varGenre = BookGenre_1.BookGenre.genre5;
                            console.log("\nLista por genero:");
                            listar.listGenre(varGenre);
                            break;
                        default:
                            break;
                    }
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
