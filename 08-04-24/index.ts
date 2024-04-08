import { monster } from "./Monster";
import { warrior } from "./Warrior";

const Warrior = new warrior("Player",5,"Paladin")
const Monster = new monster("Monstro")


Monster.getInfo()
Warrior.getInfo()

Monster.dealDamage(Warrior)
Warrior.dealDamage(Monster)