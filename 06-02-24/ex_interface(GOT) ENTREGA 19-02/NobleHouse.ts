import { Heir } from "./Heir";

export class NobleHouse {

     name: string;
     lema: string;
     heirs: object[]

    constructor(name:string, lema:string ){
        this.name = name;
        this.lema = lema;

    }

    addHeir(heir: Heir ,): void {
        
        this.heirs.push(heir)

    }
    houseInfo():void{
        console.log(`Nome da Casa>${this.name} \nLema da casa> ${this.lema} \nNome dos Herdeiros>`);
        for (let i = 0; i < this.heirs.length; i++) {
            let heirName = this.heirs[i];
            console.log(heirName);
            
        }
    }

}