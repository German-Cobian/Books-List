// Book Constructor

function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// Event Listener for add book
document.getElementById('book-form').addEventListener('submit', function(e){
  // Get form values
  const title = document.getElementById('title').value,
        author = document.getElementById('author').value,
        isbn = document.getElementById('isbn').value
  // Instantiate book
  const book = new Book(title, author, isbn);
  // Instantiate Display
  const display = new Display();
  // Add book to list
  display.addBookToList(book);
  // add to local storage
  addBook(book);
  // Clear fields
  display.clearFields();
  e.preventDefault();
});