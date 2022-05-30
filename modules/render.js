/* eslint-disable */
import { bookList } from "./createbooks.js";
import Books from "./createbooks.js";

export class Render {
  static renderBooks() {
    const bookSection = document.querySelector('.box');
    const bookListElement = document.createElement('div');
    bookListElement.id = 'bookList';
    bookList.forEach((book) => {
      const bookElem = new Books(book.title, book.author, book.id);
      const bookElement = Books.createBook(bookElem);
      bookSection.append(bookElement);
    });
  }
}
