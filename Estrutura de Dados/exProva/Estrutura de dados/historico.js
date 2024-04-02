"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.historico = void 0;
var historico = /** @class */ (function () {
    function historico() {
        this.history = [];
    }
    historico.prototype.showHistory = function () {
        if (this.isEmpty() === true) {
            console.log("Historico vazio");
        }
        else {
            for (var i = 0; i < this.history.length; i++) {
                console.log(this.history[i]);
            }
        }
    };
    historico.prototype.acessSite = function (item) {
        this.history.push(item);
    };
    historico.prototype.deleteLast = function () {
        this.history.pop();
    };
    historico.prototype.isEmpty = function () {
        return this.history.length === 0;
    };
    historico.prototype.size = function () {
        return this.history.length;
    };
    return historico;
}());
exports.historico = historico;
