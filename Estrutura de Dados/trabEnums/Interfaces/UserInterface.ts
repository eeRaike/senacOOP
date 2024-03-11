import { Book } from "../Classes/Book";

export interface UserInterface{

    userId: Number,
    userName: String,
    userComms: Number,
    userHistory: Array<Book>

    
}