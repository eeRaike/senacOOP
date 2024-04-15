"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caixa = void 0;
var Caixa = /** @class */ (function () {
    function Caixa(conteudo) {
        this.conteudo = conteudo;
    }
    Caixa.prototype.getConteudo = function () {
        return this.conteudo;
    };
    return Caixa;
}());
exports.Caixa = Caixa;
var stringA = new Caixa('Olá mundo');
console.log(stringA.getConteudo());
var numberA = new Caixa(25);
console.log(numberA.getConteudo());
