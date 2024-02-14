import { HouseHeir } from "./houseHeir";

export class Heir implements HouseHeir {
    name: string;
    idade: number;
    position: number;
    
    constructor(name:string,idade:number,position:number){
        this.name = name;
        this.idade = idade;
        this.position = position;
    }
}