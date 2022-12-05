let myLibrary = [];

function book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const addBook = document.querySelector('.add-book');
const overlay = document.querySelector('.overlay');
const addBookModal = document.getElementById('addBookModal');
const body = document.querySelector('.body');
const cardsContainer = document.querySelector('.cards-container');

const submit = document.getElementById('submit');

// Book Items
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

function addBookToLibrary(e) {
  e.preventDefault();
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;

  const book = {
    title,
    author,
    pages,
  };
  myLibrary.push(book);

  // create new book
  const bookCard = document.createElement('div');
  const name = document.createElement('p');
  const authorP = document.createElement('p');
  const pagesP = document.createElement('p');
  const readBtn = document.createElement('button');
  const removeBtn = document.createElement('button');

  bookCard.classList.add('book-card');
  name.classList.add('book-name');
  authorP.classList.add('book-author');
  pagesP.classList.add('book-pages');
  readBtn.classList.add('is-read');
  removeBtn.classList.add('remove');
  removeBtn.dataset.bookID = myLibrary.length; /* */
  bookCard.dataset.bookID = myLibrary.length;

  name.textContent = `"${book.title}"`;
  authorP.textContent = book.author;
  pagesP.textContent = `${book.pages} pages`;
  readBtn.textContent = `Not Read`;
  removeBtn.textContent = 'Remove';

  bookCard.appendChild(name);
  bookCard.appendChild(authorP);
  bookCard.appendChild(pagesP);
  bookCard.appendChild(readBtn);
  bookCard.appendChild(removeBtn);
  cardsContainer.appendChild(bookCard);

  closeAddBookModal();
  const removeButtonsAll = document.querySelectorAll('.remove');
  for (let i = 0; i < removeButtonsAll.length; i++) {
    removeButtonsAll[i].addEventListener('click', removeCard);
  }
}

function removeCard(e) {
  const bookID = e.target.dataset.bookID;
  const allBookCards = document.querySelectorAll('.book-card');
  for (let i = 0; i < allBookCards.length; i++) {
    if (bookID == allBookCards[i].dataset.bookID) {
      allBookCards[i].remove();
    }
  }
}

addBook.addEventListener('click', openAddBookModal);
overlay.addEventListener('click', closeAddBookModal);
submit.addEventListener('click', addBookToLibrary);
