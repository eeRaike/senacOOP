import { Monster } from "./Monster";


export class Warrior{
    private name: string;
    private type: string;
    private strength: number;
    private health: number = 100;

    constructor(name: string,type: string,strength: number){
        this.name = name;
        this.type = type;
        this.strength = strength;
    }

    private dealDamage(myMonster:Monster): void {
        const damage = this.strength;
        myMonster.takeDamage(damage)
        
        
    }

    private takeDamage(damage: number): void{
        this.health -= damage;
        console.log(` ${this.name} receives ${damage} from the Monster \n`);
        this.currentHp()
    }

    private info(){
        console.log(`\n ${this.name} \nClass: ${this.type} \nHP> ${this.health}/100 \nStrength> ${this.strength}`);
        
    }

    private currentHp(){
        console.log(`${this.name} HP> ${this.health}/100`);
        
    }


}