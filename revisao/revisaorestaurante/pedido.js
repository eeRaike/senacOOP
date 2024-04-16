"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pedido = void 0;
var tipoPedido_1 = require("./tipoPedido");
var pedido = /** @class */ (function () {
    function pedido(in_name, in_type) {
        this.name = in_name;
        this.type = in_type;
    }
    pedido.prototype.setPriority = function () {
        if (this.type === tipoPedido_1.tipoPedido.bebida) {
            this.priority = 1;
        }
        else if (this.type === tipoPedido_1.tipoPedido.pratoPrinc) {
            this.priority = 2;
        }
        else if (this.type === tipoPedido_1.tipoPedido.sobremesa) {
            this.priority = 3;
        }
    };
    return pedido;
}());
exports.pedido = pedido;
