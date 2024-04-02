export class Manoel{
    public name: string;
    public age: number;
    protected isAlive: boolean;


    constructor(name: string,age: number, isAlive:boolean){
        this.name = name;
        this.age = age;
        this.isAlive = isAlive;
    }
    agir(){
        console.log("Sendo velho...");
        
    }

}