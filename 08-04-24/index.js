"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Monster_1 = require("./Monster");
var Warrior_1 = require("./Warrior");
var rl = require('readline-sync');
var menu = true;
var Warrior = new Warrior_1.warrior("Player", 5, "Paladin");
var Monster = new Monster_1.monster("Monstro");
//Monster.getInfo()
//Warrior.getInfo()
//Monster.dealDamage(Warrior)
//Warrior.dealDamage(Monster)
while (menu) {
    var select = rl.questionInt("Selecione a acao");
    switch (select) {
        case 0:
            menu = false;
            break;
        case 1:
            Monster.dealDamage(Warrior);
            Warrior.dealDamage(Monster);
            break;
        case 3:
            Monster.getInfo();
            Warrior.getInfo();
            break;
    }
}
