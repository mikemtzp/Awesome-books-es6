/* eslint-disable */
import { Render } from "./modules/render.js";

Render.renderBooks();

const booksSection = document.querySelector('.books');
const addSection = document.querySelector('.add-book');
const contactSection = document.querySelector('.contact-section');
const list = document.querySelector('.list');
const addNew = document.querySelector('.add-new');
const contact = document.querySelector('.contact');

function showBooks() {
  booksSection.style.display = 'flex';
  addSection.style.display = 'none';
  contactSection.style.display = 'none';
};

function showAdd() {
  booksSection.style.display = 'none';
  addSection.style.display = 'flex';
  contactSection.style.display = 'none';
};

function showContact() {
  booksSection.style.display = 'none';
  addSection.style.display = 'none';
  contactSection.style.display = 'flex';
}

list.addEventListener('click',showBooks);
addNew.addEventListener('click',showAdd);
contact.addEventListener('click',showContact);