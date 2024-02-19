import { Heir } from "../Classes/Heir";

export interface HouseRules {
    
    descBrasao: string;
    name: string;
    motto:string;
    heirList: Array<Heir>
    MilitaryForce: number
    

    addHeir(heirInsert: Heir):void
    houseInfo():void

}