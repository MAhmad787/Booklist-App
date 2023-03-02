// Class for the Books
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

// Class Dealing with UI
class UI {
  static displayBooks() {
    const storedBooks = [
      {
        title: 'Sinfe Adab',
        author: 'Ali Nasir',
        isbn: '912345',
      },
      {
        title: 'Sinfe Urdu',
        author: 'Majid Ali',
        isbn: '7869998',
      },
    ];
    const books = storedBooks;
    books.forEach((book) => UI.addBookToList(book));
  }
  static addBookToList(book) {
    const list = document.querySelector('#book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `;
    list.appendChild(row);
  }
  static deleteBook(el) {
    if (el.classList.contains('delete')) {
      el.parentElement.parentElement.remove();
    }
  }
  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

// Display the Books on Document
document.addEventListener('DOMContentLoaded', UI.displayBooks);

// Add Books to the List
document.querySelector('#book-form').addEventListener('submit', (e) => {
  // Prevent the actual submit
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const isbn = document.querySelector('#isbn').value;
  //   Instatiate Book
  const book = new Book(title, author, isbn);
  UI.addBookToList(book);

  //   Clearing the fields
  UI.clearFields();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  // Remove book from UI
  UI.deleteBook(e.target);
});
