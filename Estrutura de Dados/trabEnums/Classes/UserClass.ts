import { UserInterface } from "../Interfaces/UserInterface";
import { Book } from "./Book";


export class UserClass implements UserInterface{

    userId: number;
    userName: String;
    userHistory: Book[] = [];
    userComms: Number;
    userFee: number = 0;

    constructor(userId:number,userName:String,userComms:Number){
        this.userId = userId
        this.userName = userName,
        this.userComms = userComms
    }



}