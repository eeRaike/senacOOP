import { monster } from "./Monster";

export class warrior {
    HP: number;
    strength: number;
    name: string;
    class: string;

    constructor(in_name:string,in_strength:number,in_class:string){
        this.HP = 100,
        this.name = in_name,
        this.strength = in_strength,
        this.class = in_class;
    }

    dealDamage(target:monster): void{
        console.log(`\n${this.name} ataca ${target.name}\n`);
        let damage: number = Math.floor(Math.random() * this.strength)
        target.receiveDamage(damage)
    }
    receiveDamage(damage:number): void{
        this.HP = this.HP - damage
        if(this.HP === 0){
            console.log(`${this.name} está morto \nGame Over`);
            
        } else {
            console.log(`${this.name} recebeu ${damage} HP atual: ${this.HP}`)
            
        }

    }

    getInfo():void{
        console.log(`Nome:${this.name} \nHP: ${this.HP} \n Dano: ${this.strength}`);
    }
}