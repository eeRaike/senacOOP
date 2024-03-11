import { Book } from "./Book";
import { BookStatus } from "./BookStatus";

export class Lists2 {


    libraryBooks: Array<Book> = []

    listAll(){
        for (let i = 0; i < this.libraryBooks.length; i++) {
            console.log(this.libraryBooks[i].title,this.libraryBooks[i].status);
            
            
        }
        
    }
    listAvailable2(){

        for (let i = 0; i < this.libraryBooks.length; i++) {
            if(this.libraryBooks[i].status === BookStatus.Available){
                console.log(this.libraryBooks[i].title,this.libraryBooks[i].status);
                
            }
        }

    }

    listBorrowed2(){

        for (let i = 0; i < this.libraryBooks.length; i++) {
            if(this.libraryBooks[i].status === BookStatus.Borrowed){
                console.log(this.libraryBooks[i].title,this.libraryBooks[i].status);
                
            }
            
        }

    }

    listOverdue2(){

        for (let i = 0; i < this.libraryBooks.length; i++) {
            if(this.libraryBooks[i].status === BookStatus.Overdue){
                console.log(this.libraryBooks[i].title,this.libraryBooks[i].status);
                
            }
            
        }

    }

}