"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NobleHouse = void 0;
var NobleHouse = /** @class */ (function () {
    function NobleHouse(name, motto) {
        this.heirList = [];
        this.name = name;
        this.motto = motto;
    }
    NobleHouse.prototype.addHeir = function (heirInsert) {
        console.log("Inserindo", heirInsert);
        this.heirList.push(heirInsert);
        this.heirList[this.heirList.indexOf(heirInsert)].heirPosition = this.heirList.indexOf(heirInsert) + 1;
        console.log("definindo posi\u00E7\u00E3o = ".concat(this.heirList.indexOf(heirInsert) + 1));
    };
    return NobleHouse;
}());
exports.NobleHouse = NobleHouse;
