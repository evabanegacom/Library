
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

function addNewBook(){
    document.querySelector('#book-form').addEventListener('submit', (e) => {

        e.preventDefault();

        const title = document.querySelector('#title').value
        const author = document.querySelector('#author').value
        const pages = document.querySelector('#pages').value
        const read = document.querySelector('#read').value
        const book = new Book(title, author, pages, read);
        addBookToLibrary(book)

    });
}

function removeBook(ele) {
    if(ele.classList.contains('delete')){
            ele.parentElement.parentElement.remove()
        }
}

function removeBookInfo () {
  document.querySelector('#book-list').addEventListener('click', (e) =>  {
      removeBook(e.target)
  });
}

function render() {
    myLibrary.forEach((book) => addBookToLibrary(book) )   
}

render();

addNewBook();

removeBookInfo();
