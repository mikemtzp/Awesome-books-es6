import Render from './modules/render.js';
import { DateTime } from './luxon.min.js';

Render.renderBooks();

const booksSection = document.querySelector('.books');
const addSection = document.querySelector('.add-book');
const contactSection = document.querySelector('.contact-section');
const list = document.querySelector('.list');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact');

const showBooks = () => {
  booksSection.classList.remove('d-none');
  list.classList.add('active');
  addSection.classList.add('d-none');
  addNew.classList.remove('active');
  contactSection.classList.add('d-none');
  contact.classList.remove('active');
};

const showAdd = () => {
  booksSection.classList.add('d-none');
  list.classList.remove('active');
  addSection.classList.remove('d-none');
  addNew.classList.add('active');
  contactSection.classList.add('d-none');
  contact.classList.remove('active');
};

const showContact = () => {
  booksSection.classList.add('d-none');
  list.classList.remove('active');
  addSection.classList.add('d-none');
  addNew.classList.remove('active');
  contactSection.classList.remove('d-none');
  contact.classList.add('active');
};

list.addEventListener('click', showBooks);
addNew.addEventListener('click', showAdd);
contact.addEventListener('click', showContact);

setInterval(() => {
  const now = DateTime.now();
  const date = now.setLocale('en-US').toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  document.getElementById('date').innerHTML = date;
}, 1000);
