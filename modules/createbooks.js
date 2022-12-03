import Storage from './storage.js';

export let bookList = Storage.initiateBooksData() || []; // eslint-disable-line

export default class Book {
  constructor(title, author, id) {
    this.title = title;
    this.author = author;
    this.id = id;
  }

  createBook() {
    const newBook = document.createElement('div');
    const titlePara = document.createElement('span');
    const authorPara = document.createElement('span');
    const remove = document.createElement('button');
    const trashIcon = document.createElement('i');
    const completeBook = document.createElement('span');
    remove.setAttribute('id', this.id);
    titlePara.textContent = this.title;
    authorPara.textContent = this.author;
    authorPara.classList.add('fst-italic');
    trashIcon.classList.add('bi', 'bi-trash-fill');
    newBook.classList.add('mb-3', 'me-3', 'ps-4', 'pe-4', 'shadow', 'rounded-pill', 'd-flex', 'align-items-center');
    completeBook.classList.add('pt-2', 'pb-2');
    remove.append(trashIcon);
    remove.classList.add('btn', 'btn-danger', 'ms-3', 'pt-1', 'pb-1', 'pe-2', 'ps-2');
    completeBook.append(titlePara, ' by ', authorPara);
    completeBook.append(remove);
    newBook.append(completeBook);

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
  const theId = Book.generateId();
  const myBook = new Book(theTitle, theAuthor, theId);
  const bookElement = myBook.createBook();
  const bookListElement = document.querySelector('.box');
  bookListElement.append(bookElement);
  bookList.push(myBook);
  Storage.storeData(bookList);
  newTitle.value = '';
  newAuthor.value = '';
});
