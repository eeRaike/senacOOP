"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NobleHouse = void 0;
var NobleHouse = /** @class */ (function () {
    function NobleHouse(name, lema) {
        this.name = name;
        this.lema = lema;
    }
    NobleHouse.prototype.addHeir = function (heir) {
        this.heirs.push(heir);
    };
    NobleHouse.prototype.houseInfo = function () {
        console.log("Nome da Casa>".concat(this.name, " \nLema da casa> ").concat(this.lema, " \nNome dos Herdeiros>"));
        for (var i = 0; i < this.heirs.length; i++) {
            var heirName = this.heirs[i];
            console.log(heirName);
        }
    };
    return NobleHouse;
}());
exports.NobleHouse = NobleHouse;
