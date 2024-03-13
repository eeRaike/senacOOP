import { BookGenre } from "../ENUMs/BookGenre"
import { BookStatus } from "../ENUMs/BookStatus"
import { UserClass } from "./UserClass";

export class Book{

    title: string;
    autor: string;
    genre: BookGenre;
    status: BookStatus;
    reservedBy: UserClass;
    lastStatus: BookStatus;
    borrowedForDays: number = 0;
    lastUser: UserClass;

    
    constructor(title,autor){
        this.title = title
        this.autor = autor
        
    }
    
}