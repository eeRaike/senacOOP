import { Animal } from "./Animal";

export class Mammal extends Animal{

    private coat: string

    constructor(name:string,age:number,coat:string){
        super(name,age);
        this.coat = coat;
    }

    breastfeed(){
        console.log("The animal is breastfeeding");
        
    }

    getCoat(){
        return this.coat;
    }

}