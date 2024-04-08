"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warrior = void 0;
var warrior = /** @class */ (function () {
    function warrior(in_name, in_strength, in_class) {
        this.HP = 100,
            this.name = in_name,
            this.strength = in_strength,
            this.class = in_class;
    }
    warrior.prototype.dealDamage = function (target) {
        console.log("\n".concat(this.name, " ataca ").concat(target.name, "\n"));
        var damage = Math.floor(Math.random() * this.strength);
        target.receiveDamage(damage);
    };
    warrior.prototype.receiveDamage = function (damage) {
        this.HP = this.HP - damage;
        if (this.HP === 0) {
            console.log("".concat(this.name, " est\u00E1 morto \nGame Over"));
        }
        else {
            console.log("".concat(this.name, " recebeu ").concat(damage, " HP atual: ").concat(this.HP));
        }
    };
    warrior.prototype.getInfo = function () {
        console.log("Nome:".concat(this.name, " \nHP: ").concat(this.HP, " \n Dano: ").concat(this.strength));
    };
    return warrior;
}());
exports.warrior = warrior;
