"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listaGar = void 0;
var listaGar = /** @class */ (function () {
    function listaGar() {
        this.items = [];
    }
    listaGar.prototype.listInsert = function (in_pedido) {
        in_pedido.setPriority();
        this.items.push(in_pedido);
    };
    listaGar.prototype.testCheck = function () {
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i].priority);
        }
    };
    return listaGar;
}());
exports.listaGar = listaGar;
