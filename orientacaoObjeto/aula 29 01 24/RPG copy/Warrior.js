"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Warrior = void 0;
var Warrior = /** @class */ (function () {
    function Warrior(name, type, strength) {
        this.health = 100;
        this.name = name;
        this.type = type;
        this.strength = strength;
    }
    Warrior.prototype.dealDamage = function (myMonster) {
        var damage = this.strength;
        myMonster.takeDamage(damage);
    };
    Warrior.prototype.takeDamage = function (damage) {
        this.health -= damage;
        console.log(" ".concat(this.name, " receives ").concat(damage, " from the Monster \n"));
        this.currentHp();
    };
    Warrior.prototype.info = function () {
        console.log("\n ".concat(this.name, " \nClass: ").concat(this.type, " \nHP> ").concat(this.health, "/100 \nStrength> ").concat(this.strength));
    };
    Warrior.prototype.currentHp = function () {
        console.log("".concat(this.name, " HP> ").concat(this.health, "/100"));
    };
    return Warrior;
}());
exports.Warrior = Warrior;
