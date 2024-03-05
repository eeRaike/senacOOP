import { BookGenre } from "./BookGenre"

export class Book{

    title: string
    autor: string
    genre: BookGenre

    constructor(title,autor,genre){
        this.title = title
        this.autor = autor
        this.genre = genre
    }
    
}