import { HouseHeir } from "../Interfaces/HouseHeir";

export class Heir implements HouseHeir{

    heirName: string;
    heirAge: number;
    heirPosition: number;

    constructor(heirName: string,heirAge: number){
        this.heirName = heirName;
        this.heirAge = heirAge;
    }

}