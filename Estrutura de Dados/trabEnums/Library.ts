
import { Book } from "./Book";
import { BookGenre } from "./BookGenre";
import { BookStatus } from "./BookStatus";
import { Lists } from "./Lists";

const rl = require('readline-sync')
const listar = new Lists
const bookteste = new Book("livro1","autor",)
const bookt = new Book("livro2","autor2")

let aateste = rl.question("teste")
let abteste = rl.question("testeautor")
const book2 = new Book(aateste,abteste)

bookt.genre = BookGenre.genre1




console.log(listar.availableBooks);
console.log(bookt.genre);

listar.listAvailable()
listar.listBorrowed()

function statusAvailable(test: Book) {
    test.status = BookStatus.Available
    console.log(test.status);
    
    listar.availableBooks.push(test)
}

statusAvailable(book2)
listar.listAvailable()
