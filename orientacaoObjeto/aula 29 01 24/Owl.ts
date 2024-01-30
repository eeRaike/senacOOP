import { Animal } from "./Animal";

export class Owl extends Animal{
    name: string;
    weight: number;

    constructor(name:string, weight: number){
       super(name, weight)
       
    }

    chirp(): void {
        console.log("Hu hu");
    
    }


    fly(quantity: number): void {
        console.log("The owl has flown for: " + quantity+ "minutes");
        
    }
}
