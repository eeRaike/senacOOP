import { NobleHouse } from "../NobleHouse";

export class Targaryen extends NobleHouse {
 
    Balerion: number = 20000
    Vhagar: number = 20000
    Meraxes: number = 20000
    dragons: number = this.Balerion + this.Vhagar + this.Meraxes
    MilitaryForce: number = this.dragons


     }

