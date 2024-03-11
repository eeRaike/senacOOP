"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lists = void 0;
var Lists = /** @class */ (function () {
    function Lists() {
        this.availableBooks = [];
        this.borrowedBooks = [];
        this.overdueBooks = [];
    }
    Lists.prototype.listAvailable = function () {
        var book;
        if (this.availableBooks.length >= 1) {
            console.log("Livros disponíveis:");
            for (book in this.availableBooks) {
                console.log(this.availableBooks[book].title);
            }
        }
        else {
            console.log("Não há livros disponíveis.");
        }
    };
    Lists.prototype.listBorrowed = function () {
        var book;
        if (this.borrowedBooks.length >= 1) {
            console.log("Livros emprestados:");
            for (book in this.borrowedBooks) {
                console.log(this.borrowedBooks[book].title);
            }
        }
        else {
            console.log("Não há livros emprestados.");
        }
    };
    Lists.prototype.listOverdue = function () {
        var book;
        if (this.overdueBooks.length >= 1) {
            console.log("Livros emprestados:");
            for (book in this.overdueBooks) {
                console.log(this.overdueBooks[book].title);
            }
        }
        else {
            console.log("Não há livros emprestados.");
        }
    };
    return Lists;
}());
exports.Lists = Lists;
