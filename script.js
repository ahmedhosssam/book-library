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

const addBook = document.querySelector('.add-book');
const overlay = document.querySelector('.overlay');
const addBookModal = document.getElementById('addBookModal');
const body = document.querySelector('.body');
const cardsContainer = document.querySelector('.cards-container');
const remove = document.querySelector('.remove');
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

function getBookFromInput() {
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  return new book(title, author, pages);
}

function addBookToLibrary() {
  const newBook = getBookFromInput();

  // create new book
  const bookCard = document.createElement('div');
  const name = document.createElement('p');
  const author = document.createElement('p');
  const pages = document.createElement('p');
  const readBtn = document.createElement('button');
  const removeBtn = document.createElement('button');

  bookCard.classList.add('book-card');
  name.className.add('book-name');
  author.className.add('book-author');
  pages.className.add('book-pages');
  readBtn.classList.add('is-read');
  removeBtn.classList.add('remove');

  title.textContent = `"${newBook.title}"`;
  author.textContent = newBook.author;
  pages.textContent = `${newBook.pages} pages`;
  removeBtn.textContent = 'Remove';

  bookCard.appendChild('name');
  bookCard.appendChild('author');
  bookCard.appendChild('pages');
  bookCard.appendChild('readBtn');
  bookCard.appendChild('removeBtn');
  cardsContainer.appendChild(bookCard);

  closeAddBookModal();
}

function removeCard() {
  const bookCard = document.querySelectorAll('.book-card');
  bookCard.remove();
}

addBook.addEventListener('click', openAddBookModal);
overlay.addEventListener('click', closeAddBookModal);
remove.addEventListener('click', removeCard);
submit.addEventListener('click', addBookToLibrary);

console.log(myLibrary);
