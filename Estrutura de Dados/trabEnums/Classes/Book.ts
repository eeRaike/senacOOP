import { BookGenre } from "../ENUMs/BookGenre"
import { BookStatus } from "../ENUMs/BookStatus"

export class Book{

    title: string
    autor: string
    genre: BookGenre
    status: BookStatus

    constructor(title,autor){
        this.title = title
        this.autor = autor
        
    }
    
}