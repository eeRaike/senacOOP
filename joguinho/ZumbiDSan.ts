import { monster } from "./Monster";

export class ZumbiS extends monster{
    constructor(in_name:string){
        super()
        this.HP = 30
        this.name = in_name;
        this.strength = 10
        this.dexterity = 15
        
    }
}