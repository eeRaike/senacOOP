import { Carlos } from "./Carlos"

export class Joana extends Carlos {
    private secret: string

    constructor(name:string,age:number,isAlive:boolean,hairColor:string,secret:string){
        super(name,age,isAlive,hairColor)
        this.secret = secret
    }

    agir(): void {
        console.log("NÃO sendo velha...");
        
    }

    dancar(): void{
        console.log("Dancando...");
        
    }

    contarSegredo():void {
        console.log(this.secret);
        
    }
}