import { Warrior } from "./Warrior";
import { Monster } from "./Monster";

const myWarrior = new Warrior("Player","Berserk",5)
const myMonster = new Monster("Roberto")

myWarrior.info()
myMonster.info()
myWarrior.dealDamage(myMonster)
myMonster.dealDamage(myWarrior)