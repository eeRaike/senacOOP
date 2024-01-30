"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Monster = void 0;
var Monster = /** @class */ (function () {
    function Monster(name) {
        this.strength = 50;
        this.health = 10;
        this.name = name;
    }
    Monster.prototype.dealDamage = function (myWarrior) {
        var damage = this.strength;
        myWarrior.takeDamage(damage);
    };
    Monster.prototype.takeDamage = function (damage) {
        this.health -= damage;
        console.log(" ".concat(this.name, " receives ").concat(damage, " from the Warrior \n"));
        this.currentHp();
    };
    Monster.prototype.info = function () {
        console.log("\n ".concat(this.name, " \nHP> ").concat(this.health, "/10 \nStrength> ").concat(this.strength));
    };
    Monster.prototype.currentHp = function () {
        console.log("".concat(this.name, " HP> ").concat(this.health, "/10"));
    };
    return Monster;
}());
exports.Monster = Monster;
;
