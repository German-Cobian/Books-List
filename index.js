
const generateId = () => (Math.random() + 1);

function Book(title, author, id) {
  this.title = title;
  this.author = author;
  this.id = generateId();
}

const firstBook = new Book('Crime and Punishment', 'Dostoyesky');
const secondBook = new Book('Dawn', 'Nieszche');

let bookArray = [firstBook, secondBook];

const bookCollection = document.querySelector('#collection');

const createBookElement = (book) => {
  const bookContainer = document.querySelector('#book-collection');
  bookContainer.id = `${book.id}`;
  bookContainer.innerHTML = `
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button type="submit" data-action="delete" data-book-id="${book.id}>Remove</button>
        `;
  return bookContainer;
}






