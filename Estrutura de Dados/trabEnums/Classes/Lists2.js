"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Lists2 = void 0;
var BookStatus_1 = require("../ENUMs/BookStatus");
var Lists2 = /** @class */ (function () {
    function Lists2() {
        this.libraryBooks = [];
    }
    Lists2.prototype.listAll = function () {
        for (var i = 0; i < this.libraryBooks.length; i++) {
            console.log(this.libraryBooks[i].title, this.libraryBooks[i].status);
        }
    };
    Lists2.prototype.listAvailable2 = function () {
        for (var i = 0; i < this.libraryBooks.length; i++) {
            if (this.libraryBooks[i].status === BookStatus_1.BookStatus.Available) {
                console.log(this.libraryBooks[i].title, this.libraryBooks[i].status);
            }
        }
    };
    Lists2.prototype.listBorrowed2 = function () {
        for (var i = 0; i < this.libraryBooks.length; i++) {
            if (this.libraryBooks[i].status === BookStatus_1.BookStatus.Borrowed) {
                console.log(this.libraryBooks[i].title, this.libraryBooks[i].status);
            }
        }
    };
    Lists2.prototype.listOverdue2 = function () {
        for (var i = 0; i < this.libraryBooks.length; i++) {
            if (this.libraryBooks[i].status === BookStatus_1.BookStatus.Overdue) {
                console.log(this.libraryBooks[i].title, this.libraryBooks[i].status);
            }
        }
    };
    Lists2.prototype.listGenre = function (varGenre) {
        for (var i = 0; i < this.libraryBooks.length; i++) {
            if (varGenre === this.libraryBooks[i].genre) {
                console.log(this.libraryBooks[i].title, this.libraryBooks[i].genre);
            }
        }
    };
    return Lists2;
}());
exports.Lists2 = Lists2;
