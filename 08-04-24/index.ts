import { monster } from "./Monster";
import { warrior } from "./Warrior";

const rl = require('readline-sync')
let menu:boolean = true;
const Warrior = new warrior("Player",5,"Paladin")
const Monster = new monster("Monstro")


//Monster.getInfo()
//Warrior.getInfo()

//Monster.dealDamage(Warrior)
//Warrior.dealDamage(Monster)


while(menu){
    let select = rl.questionInt("Selecione a acao")
    switch(select){
        case 0:
            menu = false;
            break;
        case 1: 
        Monster.dealDamage(Warrior)
        Warrior.dealDamage(Monster)
            break;
        case 3:
            Monster.getInfo()
            Warrior.getInfo()
            break;
    }
}