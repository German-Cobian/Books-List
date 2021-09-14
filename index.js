const generateId = () => (Math.random() + 1).toString(36).substring(7);

const firstBook = new Book('Crime and Punishment', 'Dostoyesky');
const secondBook = new Book('Dawn', 'Nieszche');

let bookArray = [firstBook, secondBook];

function Book(title, author) {
  this.title = title;
  this.author = author;
  this.id = generateId();   
}

Book.prototype = {
  ...Book.prototype,
  addBookToArray() {
    bookArray.push(this)
  }
}

let form = document.querySelector("#book-form");

form.addEventListener("submit", function(e){
  e.preventDefault();
  let author = form.elements.author.value;
  let title = form.elements.title.value;
  let newBook = new Book (title, author);
  newBook.addBookToArray();
});


const bookCollection = document.querySelector('#collection');

const createBookElement = (book) => {

  const bookContainer = document.createElement('div');
  bookContainer.id = `${book.id}`;
  bookContainer.innerHTML = `
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button type="submit" data-action="delete" data-book-id="${book.id}>Remove</button>
        `;
  return bookContainer;
}

const displayBook = (book, bookCollection) => {
  const newBookElement = createBookElement(newBook);
  bookCollection.appendChild(bookElement);
};

bookArray.forEach((book) => {
  displayBook(book, bookCollection);
});








