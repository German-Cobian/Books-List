;

const generateId = () => (Math.random() + 1);
const firstBook = new Book('Crime and Punishment', 'Dostoyesky');
const secondBook = new Book('Dawn', 'Nieszche');
let bookArray = [firstBook, secondBook]

function Book(title, author, id) {
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
})





