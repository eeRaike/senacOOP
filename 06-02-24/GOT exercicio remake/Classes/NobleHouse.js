"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NobleHouse = void 0;
var NobleHouse = /** @class */ (function () {
    function NobleHouse(descBrasao, name, motto) {
        this.heirList = [];
        this.name = name;
        this.motto = motto;
        this.descBrasao = descBrasao;
    }
    NobleHouse.prototype.addHeir = function (heirInsert) {
        this.heirList.push(heirInsert);
        this.heirList[this.heirList.indexOf(heirInsert)].heirPosition = this.heirList.indexOf(heirInsert) + 1;
    };
    NobleHouse.prototype.houseInfo = function () {
        var x = this.heirList;
        console.log("Descricao do Brasao:".concat(this.descBrasao, " \nNome da Casa:").concat(this.name, " \nLema da Casa:").concat(this.motto, " \nHerdeiros:"));
        for (var i = 0; i < this.heirList.length; i++) {
            console.log(x[i].heirPosition, x[i].heirName);
        }
        console.log("\n");
    };
    return NobleHouse;
}());
exports.NobleHouse = NobleHouse;
