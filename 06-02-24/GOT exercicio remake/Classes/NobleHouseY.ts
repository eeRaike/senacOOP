import { HouseRules } from "../Interfaces/HouseRules";
import { Heir } from "./HeirY";

export class NobleHouse implements HouseRules{

        name: string;
        motto: string;

    constructor(name:string, motto:string) {
        this.name = name;
        this.motto = motto;
    }

    heirList: Array<Heir> = []

    addHeir(heirInsert: Heir):void{

        console.log("Inserindo", heirInsert);
        this.heirList.push(heirInsert)
        this.heirList[this.heirList.indexOf(heirInsert)].heirPosition = this.heirList.indexOf(heirInsert) + 1
        console.log(`definindo posição = ${this.heirList.indexOf(heirInsert) + 1}`);
         
    }

    houseInfo() {
        
    }
}