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
  booksSection.style.display = 'flex';
  addSection.style.display = 'none';
  contactSection.style.display = 'none';
};

const showAdd = () => {
  booksSection.style.display = 'none';
  addSection.style.display = 'flex';
  contactSection.style.display = 'none';
};

const showContact = () => {
  booksSection.style.display = 'none';
  addSection.style.display = 'none';
  contactSection.style.display = 'flex';
};

list.addEventListener('click', showBooks);
addNew.addEventListener('click', showAdd);
contact.addEventListener('click', showContact);

setInterval(() => {
  const now = DateTime.now();
  const date = now.setLocale('en-US').toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  document.getElementById('date').innerHTML = date;
}, 1000);