import { HouseRules } from "../HouseRules";
import { NobleHouse } from "../NobleHouse";

export class Baratheon extends NobleHouse implements HouseRules{

    constructor(name:string,lema:string){
        super(name,lema)

    }
    recitarLema() {
        console.log(this.lema);
        
    }
}