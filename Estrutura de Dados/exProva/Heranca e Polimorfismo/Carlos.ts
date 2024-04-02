import { Manoel } from "./Manoel";

export class Carlos extends Manoel {
    hairColor: string;

    constructor(name:string,age:number,isAlive:boolean,hairColor: string){
        super(name,age,isAlive)
        this.hairColor = hairColor
    }
   
    rir(): void{
        console.log("Rindo... hahaha");
        
    }
    agir(): void {
        console.log("Sendo velho(mas não tanto)...");
        
    }

}