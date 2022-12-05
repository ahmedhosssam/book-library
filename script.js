let myLibrary = [
  { title: 'Deep Work', author: 'Cal Newport', pages: 387 },
  { title: 'God Delusion', author: 'Richard Dawkins', pages: 387 },
  { title: 'The Sapiens', author: 'Cal Newport', pages: 691 },
];

function book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookToLibrary() {
  // do stuff here
}

const addBook = document.querySelector('.add-book');
const overlay = document.querySelector('.overlay');
const addBookModal = document.getElementById('addBookModal');
const body = document.querySelector('.body');
const cardsContainer = document.querySelector('.cards-container');
const remove = document.querySelector('.remove');

const bookCard = document.querySelectorAll('.book-card');
const bookName = document.querySelector('.book-name');
const author = document.querySelector('.book-author');
const pages = document.querySelector('.book-pages');

function openAddBookModal() {
  overlay.classList.add('active');
  addBookModal.classList.add('active');
}

function closeAddBookModal() {
  if (
    overlay.classList.contains('active') &&
    addBookModal.classList.contains('active')
  ) {
    overlay.classList.remove('active');
    addBookModal.classList.remove('active');
  }
}

function removeCard() {
  const bookCard = document.querySelectorAll('.book-card');
  bookCard.remove();
}

addBook.addEventListener('click', openAddBookModal);
overlay.addEventListener('click', closeAddBookModal);
remove.addEventListener('click', removeCard);
