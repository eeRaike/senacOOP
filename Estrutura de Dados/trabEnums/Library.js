"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("./Book");
var BookGenre_1 = require("./BookGenre");
var BookStatus_1 = require("./BookStatus");
var Lists_1 = require("./Lists");
var rl = require('readline-sync');
var listar = new Lists_1.Lists;
var bookteste = new Book_1.Book("livro1", "autor");
var bookt = new Book_1.Book("livro2", "autor2");
var aateste = rl.question("teste");
var abteste = rl.question("testeautor");
var book2 = new Book_1.Book(aateste, abteste);
bookt.genre = BookGenre_1.BookGenre.genre1;
console.log(listar.availableBooks);
console.log(bookt.genre);
listar.listAvailable();
listar.listBorrowed();
function statusAvailable(test) {
    test.status = BookStatus_1.BookStatus.Available;
    console.log(test.status);
    listar.availableBooks.push(test);
}
statusAvailable(book2);
listar.listAvailable();
