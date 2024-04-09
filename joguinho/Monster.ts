import { Entity } from "./Entity";


export class monster extends Entity {

    constructor(){
        super()
        
    }

    basicAttack(target:Entity){
        console.log(`\n${this.name} ataca ${target.name}\n`);
        let damage: number = Math.floor(Math.random() * this.strength)
        target.receiveDamage(damage)
    }

    receiveDamage(damage:number){
        this.HP = this.HP - damage
        if(this.HP <= 0){
            console.log(`${this.name} está morto `);
            
        } else {
            console.log(`${this.name} recebeu ${damage} de dano HP atual: ${this.HP}`);
            
        }
    }

    getInfo():void{
        console.log(`Nome:${this.name} \nHP: ${this.HP} \n Dano: ${this.strength}`);
    }
    

}