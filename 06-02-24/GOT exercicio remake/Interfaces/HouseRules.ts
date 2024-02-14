import { Heir } from "../Classes/HeirY";

export interface HouseRules {
    
    descBrasao: string;
    name: string;
    motto:string;
    heirList: Array<Heir>
    

    addHeir():void
    houseInfo():void

}