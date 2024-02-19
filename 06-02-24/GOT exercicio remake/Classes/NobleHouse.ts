import { HouseRules } from "../Interfaces/HouseRules";
import { Heir } from "./Heir";

export class NobleHouse implements HouseRules{

        descBrasao: string;
        name: string;
        motto: string;
        MilitaryForce: number;

    constructor(descBrasao: string,name:string, motto:string) {
        this.name = name;
        this.motto = motto;
        this.descBrasao = descBrasao;
    }

    heirList: Array<Heir> = []

    addHeir(heirInsert: Heir):void{

       
        this.heirList.push(heirInsert)
        this.heirList[this.heirList.indexOf(heirInsert)].heirPosition = this.heirList.indexOf(heirInsert) + 1
     
         
    }

    houseInfo() {
        let x = this.heirList
        console.log(`Descricao do Brasao:${this.descBrasao} \nNome da Casa:${this.name} \nLema da Casa:${this.motto} \nHerdeiros:`);

        for (let i = 0; i < this.heirList.length; i++) {
            console.log(x[i].heirPosition,x[i].heirName);
            
            
        }
        console.log(`\n`);
       
    }
}