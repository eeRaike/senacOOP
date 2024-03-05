import { Book } from "./Book"

export class Lists{

     availableBooks: Array<Book> = []
     borrowedBooks: Array<Book> = []
     overdueBooks: Array<Book> = []


    listAvailable(){
        let book
        for (book in this.availableBooks){
            console.log(book.title);
            
        }

        }
}
   /* listBorrowed(){

}
    listOverdue(){

} 


*/