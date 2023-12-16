class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}
class UI {
  addBookToList(book) {
    const list = document.getElementById('book-list');
        
        const row = document.createElement('tr')
        // insert cols
        row.innerHTML= `<td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.isbn}</td>
                        <td><a href='#' class="delete">X</a></td>`;
        list.appendChild(row);
  }
  clearField() {
    document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
  }
  showAlert(message,className) {
    const div = document.createElement('div');
        div.className = `alert ${className}`
        div.appendChild(document.createTextNode(message))
        const container = document.querySelector('.container')
        const form = document.querySelector('#book-form')
        container.insertBefore(div,form);

        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
  }
  deleteBook(target) {
    if (target.className === "delete") {
        target.parentElement.parentElement.remove();
    }
  }
}
// Event listeners

document.getElementById('book-form').addEventListener('submit', function (e) {
    // get form values
    const title = document.getElementById('title').value,
          author = document.getElementById('author').value,
          isbn = document.getElementById('isbn').value;

        //   instantiate book
    const book = new Book(title,author,isbn);
    // INSTANTIATE UI
    const ui = new UI();

    if (title === '' || author === '' || isbn ==='') {
        ui.showAlert('please fill in all field', 'error')
    } else {
        ui.addBookToList(book);

        ui.showAlert('Book', 'Added')

        // clear field
        ui.clearField();
    }



   

    e.preventDefault();
})

// event listener for delete

document.getElementById('book-list').addEventListener('click', function (e) {

    const ui = new UI();
    ui.deleteBook(e.target)

    ui.showAlert('book remove', 'success')

    e.preventDefault();
})