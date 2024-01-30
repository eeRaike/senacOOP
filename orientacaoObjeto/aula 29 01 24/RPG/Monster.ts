import { Warrior } from "./Warrior";
export class Monster{
    private name: string;
    private strength: number = 50;
    private health: number = 10;

    constructor(name: string){
        this.name = name;
    }

    private dealDamage(myWarrior:Warrior): void {
        const damage = this.strength;
        myWarrior.takeDamage(damage)
        
        
    }

    private takeDamage(damage: number): void{
        this.health -= damage;
        console.log(` ${this.name} receives ${damage} from the Warrior \n`);
        this.currentHp()
    }

    private info(){
        console.log(`\n ${this.name} \nHP> ${this.health}/10 \nStrength> ${this.strength}`);
        
    }

    private currentHp(){
        console.log(`${this.name} HP> ${this.health}/10`);
        
    }
};