class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(book) {
    const list = document.querySelector('#book-list');

    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.pages}</td>
    <td><a href="#" class="change">${book.read}</a></td>
    <td><a href="#" class="delete">X</a></td>
    `

    list.appendChild(row);
}

function removeBook(el) {   
    if (el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
    }
}

function changeStatus(el) {
    if (el.classList.contains('change') && el.innerHTML === "Yes") {
        el.innerHTML = "No";
    } else if (el.classList.contains('change') && el.innerHTML === "No") {
        el.innerHTML = "Yes";
    }
}

document.querySelector('#book-form').addEventListener('submit', (e) => {
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').value;

    const book = new Book(title, author, pages, read);

    addBookToLibrary(book);

    e.preventDefault();
});

document.querySelector('#book-list').addEventListener('click', (e) => {
    removeBook(e.target);
});

document.querySelector('#book-list').addEventListener('click', (e) => {
    changeStatus(e.target);
});