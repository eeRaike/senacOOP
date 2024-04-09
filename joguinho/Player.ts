import { Entity } from "./Entity";

export class player extends Entity {

    constructor(in_name:string,in_strength:number,in_class:string){
        super()
        this.HP = 100,
        this.name = in_name,
        this.strength = in_strength,
        this.class = in_class;
    }

    
    receiveDamage(damage:number): void{
        this.HP = this.HP - damage
        if(this.HP <= 0){
            console.log(`${this.name} está morto`);
            
        } else {
            console.log(`${this.name} recebeu ${damage} de dano HP atual: ${this.HP}`)
            
        }

    }

    getInfo():void{
        console.log(`Nome:${this.name} \nHP: ${this.HP} \nDano: ${this.strength} \nClasse: ${this.class}`);
    }
}