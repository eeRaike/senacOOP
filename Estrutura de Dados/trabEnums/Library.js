"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Book_1 = require("./Book");
var BookGenre_1 = require("./BookGenre");
var Lists_1 = require("./Lists");
var teste = new Lists_1.Lists;
var bookteste = new Book_1.Book("test", "autor");
var bookt = new Book_1.Book("2", "autor2");
bookt.genre = BookGenre_1.BookGenre.genre1;
teste.availableBooks.push(bookteste, bookt);
console.log(bookt.genre);
teste.listAvailable();
teste.listBorrowed();
