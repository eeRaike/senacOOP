import { Animal } from "./Animal";

export class Dog extends Animal{
    name: string;
    weight: number;

    constructor(name:string, weight: number){
        super(name, weight)

     }

    bark(): void {
        console.log("Au au");

    }
}
