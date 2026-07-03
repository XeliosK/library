const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (this.read = false) {
            return "not read yet";
        } else {
            return "read";
        }
    }
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
    const newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
}

function displayBooks() {
    let eachBook = myLibrary.forEach(item => console.log(item));
}