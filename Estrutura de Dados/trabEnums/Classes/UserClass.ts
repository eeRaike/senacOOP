import { UserInterface } from "../Interfaces/UserInterface";
import { Book } from "./Book";

export class UserClass implements UserInterface{

    userId: Number;
    userName: String;
    userHistory: Book[];
    userComms: Number;

    constructor(userId:Number,userName:String,userComms:Number){
        this.userId = userId
        this.userName = userName,
        this.userComms = userComms
    }



}