"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.monster = void 0;
var monster = /** @class */ (function () {
    function monster(in_name) {
        this.HP = 10,
            this.name = in_name,
            this.strength = 50;
    }
    monster.prototype.dealDamage = function (target) {
        console.log("\n".concat(this.name, " ataca ").concat(target.name, "\n"));
        target.receiveDamage(this.strength);
    };
    monster.prototype.receiveDamage = function (damage) {
        this.HP = this.HP - damage;
        if (this.HP === 0) {
            console.log("".concat(this.name, " est\u00E1 morto \nGame Over"));
        }
        else {
            console.log("".concat(this.name, " HP atual: ").concat(this.HP));
        }
    };
    monster.prototype.getInfo = function () {
        console.log("Nome:".concat(this.name, " \nHP: ").concat(this.HP, " \n Dano: ").concat(this.strength));
    };
    return monster;
}());
exports.monster = monster;
