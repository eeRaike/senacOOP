export class Entity {
    HP: number;
    strength: number;
    name: string;
    class: string;
    dexterity: number

receiveDamage(damage:number): void{
    this.HP = this.HP - damage
    if(this.HP <= 0){
        console.log(`${this.name} está morto`);
        
    } else {
        console.log(`${this.name} recebeu ${damage} de dano HP atual: ${this.HP}`)
        
    }

}

getInfo():void{
    console.log(`Nome:${this.name} \nHP: ${this.HP} \n Dano: ${this.strength}`);
}

}