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
        for (book in this.availableBooks) {
            console.log(book.title);
        }
    };
    return Lists;
}());
exports.Lists = Lists;
/* listBorrowed(){

}
 listOverdue(){

}


*/ 
