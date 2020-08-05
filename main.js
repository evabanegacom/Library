
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
    book.read = document.getElementById("read").checked
    row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td> <button class="btn btn-info" id="status"> ${book.read} </button></td>
            
            <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

    list.appendChild(row)

    document.querySelector('body').addEventListener('click', (e) => {
        
        if (e.target.id === 'status') {
            e.preventDefault()
            if (book.read === false) {
                 book.read = true
                 e.target.innerHTML = 'true'
            } else {
                book.read = false
                e.target.innerHTML = 'false'
            }
        }
    })

    
}
function clearfields(){
    document.querySelector('#title').value = ''
    document.querySelector('#author').value = ''
    document.querySelector('#pages').value = ''
    document.querySelector('#read').checked = false
}

function addNewBook(){
    document.querySelector('#book-form').addEventListener('submit', (e) => {

        e.preventDefault();

        let title = document.querySelector('#title').value
        let author = document.querySelector('#author').value
        let pages = document.querySelector('#pages').value
        let read = document.querySelector('#read').value
        let book = new Book(title, author, pages, read);
        addBookToLibrary(book)

        clearfields()

        

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




