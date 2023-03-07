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
  static alertMessage(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    div.style.fontSize = '1.2rem';
    div.style.fontWeight = '700';
    const container = document.querySelector('.container');
    const form = document.querySelector('#book-form');
    container.insertBefore(div, form);

    // Remove the alert
    setTimeout(() => div.remove(), 3000);
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

  if (title === '' || author === '' || isbn === '') {
    UI.alertMessage('Fill all fields', 'danger');
  } else {
    //   Instatiate Book
    const book = new Book(title, author, isbn);
    UI.addBookToList(book);
    UI.alertMessage('Book Added', 'success');

    //   Clearing the fields
    UI.clearFields();
  }
});

document.querySelector('#book-list').addEventListener('click', (e) => {
  // Remove book from UI
  UI.deleteBook(e.target);
  UI.alertMessage('Book Removed', 'success');
});
