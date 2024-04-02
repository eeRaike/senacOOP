"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Manoel = void 0;
var Manoel = /** @class */ (function () {
    function Manoel(name, age, isAlive) {
        this.name = name;
        this.age = age;
        this.isAlive = isAlive;
    }
    Manoel.prototype.agir = function () {
        console.log("Sendo velho...");
    };
    return Manoel;
}());
exports.Manoel = Manoel;
