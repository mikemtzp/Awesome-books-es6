import Books, { bookList } from './createbooks.js';

export default class Render {
  static renderBooks() {
    const bookSection = document.querySelector('.box');
    const bookListElement = document.createElement('div');
    bookListElement.id = 'bookList';
    bookList.forEach((book) => {
      const bookElem = new Books(book.title, book.author, book.id);
      const bookElement = bookElem.createBook();
      bookSection.append(bookElement);
    });
  }
}
