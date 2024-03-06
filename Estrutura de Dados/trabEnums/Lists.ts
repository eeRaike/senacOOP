import { Book } from "./Book"

export class Lists{

     availableBooks: Array<Book> = []
     borrowedBooks: Array<Book> = []
     overdueBooks: Array<Book> = []


    listAvailable(){
        let book
        
        if(this.availableBooks.length >= 1){
        console.log("Livros disponíveis:");
            for (book in this.availableBooks){
                console.log(this.availableBooks[book].title);
            
            }
    
        }else {
            console.log("Não há livros disponíveis.");
            
        }

    }
    listBorrowed(){
        let book
        
        if(this.borrowedBooks.length >= 1){
        console.log("Livros emprestados:");
            for (book in this.borrowedBooks){
                console.log(this.borrowedBooks[book].title);
            
            }
    
        }else {
            console.log("Não há livros emprestados.");
            
        }

    }
    listOverdue(){
        let book
        
        if(this.overdueBooks.length >= 1){
        console.log("Livros emprestados:");
            for (book in this.overdueBooks){
                console.log(this.overdueBooks[book].title);
            
            }
    
        }else {
            console.log("Não há livros emprestados.");
            
        }

    } 
    
}


