import { Book } from "./Book";
import { BookGenre } from "./BookGenre";
import { BookStatus } from "./BookStatus";
import { Lists2 } from "./Lists2";
import { MenuBooks } from "./menus/menuBooks";
import { menuMain } from "./menus/menuMain";

const mainMenu = new menuMain
const lista = new Lists2

let livro = new Book("Titulo1","Autor1")
livro.status = BookStatus.Available
livro.genre = BookGenre.genre1
lista.libraryBooks.push(livro)

livro = new Book("Titulo2","Autor2")
livro.status = BookStatus.Available
livro.genre = BookGenre.genre2
lista.libraryBooks.push(livro)

livro = new Book("Titulo3","Autor3")
livro.status = BookStatus.Borrowed
livro.genre = BookGenre.genre4
lista.libraryBooks.push(livro)

livro = new Book("Titulo4","Autor4")
livro.status = BookStatus.Overdue
livro.genre = BookGenre.genre3
lista.libraryBooks.push(livro)


lista.listAll()
mainMenu.startMenu(lista)
