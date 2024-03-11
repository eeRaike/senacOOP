import { Book } from "./Book";
import { BookGenre } from "../ENUMs/BookGenre";
import { BookStatus } from "../ENUMs/BookStatus";
import { UserMethods } from "./UserMethods";

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
    listGenre(varGenre: BookGenre){
        for (let i = 0; i < this.libraryBooks.length; i++) {
            if(varGenre === this.libraryBooks[i].genre ){
                console.log(this.libraryBooks[i].title,this.libraryBooks[i].genre);
                
            }
            
        }
    }

    borrowBook(selectbook: Book){
        const userArray = new UserMethods
        this.listAvailable2()
            userArray.usersArray
    }
}