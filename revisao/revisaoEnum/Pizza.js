"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pizza = void 0;
var Pizza = /** @class */ (function () {
    function Pizza(in_sabor, in_tamanho, in_preco) {
        this.sabor = in_sabor;
        this.tamanho = in_tamanho;
        this.preco = in_preco;
    }
    Pizza.prototype.pizzaDesc = function () {
        console.log("Pizza tamanho: ".concat(this.tamanho, " Sabor: ").concat(this.sabor, " Preco: ").concat(this.preco));
    };
    return Pizza;
}());
exports.Pizza = Pizza;
