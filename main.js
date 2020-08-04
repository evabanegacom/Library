
let myLibrary = [
    {
    title: 'Book one',
    author: 'John Doe',
    pages: 320,
    read: 'true'
},{
    title: 'Book two',
    author: 'Jane Doe',
    pages: 320,
    read: 'false'
}];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    // do stuff here
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td>${book.read}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;
        
    list.appendChild(row)
}

function removeBook() {
    // do stuff here
}


function render() {
    myLibrary.forEach((book) => addBookToLibrary(book) )   
}

render();