import { monster } from "./Monster";

export class ZumbiSB extends monster{
    constructor(in_name:string){
        super()
        this.HP = 50
        this.name = in_name;
        this.strength = 20
        this.dexterity = 20
        
    }
}