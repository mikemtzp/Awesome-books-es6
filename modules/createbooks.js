import Storage from './storage.js';

export let bookList = Storage.initiateBooksData(); // eslint-disable-line

export default class Books {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  createBook() {
    const newBook = document.createElement('div');
    const titlePara = document.createElement('p');
    const authorPara = document.createElement('p');
    const remove = document.createElement('button');
    remove.setAttribute('id', this.id);
    titlePara.textContent = this.title;
    authorPara.textContent = this.author;
    const completeBook = `"${this.title}" by ${this.author}`;
    remove.textContent = 'Remove';
    newBook.classList.toggle('grey', this.id % 2 !== 0);
    newBook.classList.toggle('white', this.id % 2 === 0);
    newBook.classList.add('position');
    remove.classList.add('remove');

    newBook.append(completeBook);
    newBook.append(remove);

    remove.addEventListener('click', (e) => {
      e.preventDefault();
      newBook.remove();
      bookList = bookList.filter((book) => book.id !== this.id);
      Storage.storeData(bookList);
    });
    return newBook;
  }

  static generateId() {
    if (bookList.length > 0) {
      return bookList[bookList.length - 1].id + 1;
    }
    return -1;
  }
}

const add = document.getElementById('add');

add.addEventListener('click', (e) => {
  e.preventDefault();
  const newTitle = document.getElementById('title');
  const newAuthor = document.getElementById('author');
  const theTitle = newTitle.value;
  const theAuthor = newAuthor.value;
  const theId = Books.generateId();
  const myBook = new Books(theTitle, theAuthor, theId);
  const bookElement = myBook.createBook();
  const bookListElement = document.querySelector('.box');
  bookListElement.append(bookElement);
  bookList.push(myBook);
  Storage.storeData(bookList);
});
