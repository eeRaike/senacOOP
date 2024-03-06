import { Book } from "./Book";
import { BookGenre } from "./BookGenre";
import { BookStatus } from "./BookStatus";
import { Lists } from "./Lists";

const teste = new Lists
const bookteste = new Book("test","autor",)
const bookt = new Book("2","autor2")

bookt.genre = BookGenre.genre1

teste.availableBooks.push(bookteste,bookt)

console.log(teste.availableBooks);
console.log(bookt.genre);

teste.listAvailable()
teste.listBorrowed()

