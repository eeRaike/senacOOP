"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(title, autor) {
        this.borrowedForDays = 0;
        this.title = title;
        this.autor = autor;
    }
    return Book;
}());
exports.Book = Book;
