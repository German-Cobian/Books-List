// eslint-disable-next-line max-classes-per-file

// Book Constructor

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// Display class
class Display {
// Add Book To List
  addBookToList(book) {
    const list = document.getElementById('book-list');
    // Create tr element
    const bookItem = document.createElement('div');
    bookItem.id = `${book.id}`;
    // Insert columns
    bookItem.innerHTML = `
    <p>${book.title}</p>
    <p>${book.author}</p>
    <p>${book.isbn}</p>
    <button><a href="#" class="delete">Remove</a></button>
    `;
    list.appendChild(bookItem);
  }

  // Delete Book
  deleteBook(target) {
    if (target.className === 'delete') {
      target.parentElement.parentElement.remove();
    }
  }

  // Clear Fields
  clearFields() {
    document.getElementById('title').value = '';
    document.getElementById('author').value = '';
    document.getElementById('isbn').value = '';
  }
}

// Class local storage

class MylocalStorage {
  static getBooks() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  // Display books in local storage
  static displayBooks() {
    const books = MylocalStorage.getBooks();
    books.forEach((book) => {
      const display = new Display();
      // Add book to Display
      display.addBookToList(book);
    });
  }

  // Add books to local storage
  static addBook(book) {
    const books = MylocalStorage.getBooks();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  // Remove books from local storage
  static removeBook(isbn) {
    let books = MylocalStorage.getBooks();
    const filteredBooks = books.filter((book) => book.isbn !== isbn);
    books = filteredBooks;
    localStorage.setItem('books', JSON.stringify(books));
  }
}

// DOM load Event
document.addEventListener('DOMContentLoaded', MylocalStorage.displayBooks);

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit', (e) => {
  // Get form values
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const isbn = document.getElementById('isbn').value;
  // Instantiate book
  const book = new Book(title, author, isbn);
  // Instantiate Display
  const display = new Display();
  // Add book to list
  display.addBookToList(book);
  // add to local storage
  MylocalStorage.addBook(book);
  // Clear fields
  display.clearFields();
  e.preventDefault();
});

// Event Listener for delete
document.getElementById('book-list').addEventListener('click', (e) => {
  // Instantiate Display
  const display = new Display();

  // Delete book
  display.deleteBook(e.target);

  // Remove from localStorage
  MylocalStorage.removeBook(e.target.parentElement.previousElementSibling.textContent);

  e.preventDefault();
});