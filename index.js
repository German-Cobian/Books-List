
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

};

const form = document.querySelector("#book-form");

form.addEventListener("submit", function(e){
  e.preventDefault();
  let author = form.elements.author.value;
  let title = form.elements.title.value;
  let newBook = new Book (title, author);
  newBook.addBookToArray();
})






const div = document.querySelector(".book-collection")



function displayBook(book){
  let titleP = document.createElement("p");
  titleP.appendChild(document.createTextNode(`Title: ${book.title}`));
  let authorP = document.createElement("p");
  authorP.appendChild(document.createTextNode(`Author: ${book.author}`));
  let deleteBookButton = document.createElement("button");
  deleteBookButton.id = "delete-button";
  deleteBookButton.innerText = "delete";

  deleteBookButton.addEventListener("click", function(){
    let bookToDelete = document.querySelector(`#${book.author}`);
    bookArray.splice(bookArray.indexOf(book), 1);
     bookToDelete.remove();
    return bookArray;
  })

  let divBook = document.createElement("div");
  divBook.id = book.author;
  divBook.appendChild(titleP);
  divBook.appendChild(authorP);
  divBook.appendChild(deleteBookButton);
  div.appendChild(divBook);
} 


for (let i= 0; i < bookArray.length; i++) {
  displayBook(bookArray[i]);
  console.log(bookArray.indexOf(bookArray[i]))

}

