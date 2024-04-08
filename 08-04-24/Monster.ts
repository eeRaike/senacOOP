import { warrior } from "./Warrior";

export class monster {

    HP: number;
    name: string;
    strength: number;

    constructor(in_name:string,){
        this.HP = 10,
        this.name = in_name,
        this.strength = 50; 
    }

    dealDamage(target:warrior){
        console.log(`\n${this.name} ataca ${target.name}\n`);
        
        target.receiveDamage(this.strength)
    }

    receiveDamage(damage:number){
        this.HP = this.HP - damage
        if(this.HP === 0){
            console.log(`${this.name} está morto \nGame Over`);
            
        } else {
            console.log(`${this.name} HP atual: ${this.HP}`);
            
        }
    }

    getInfo():void{
        console.log(`Nome:${this.name} \nHP: ${this.HP} \n Dano: ${this.strength}`);
    }
    

}