// press submit, get form values
// log values in array // make a card

let myLibrary = [];

const container = document.querySelector(".container");
const submit = document.querySelector("#submit");
const form = document.querySelector('.form');

/* 
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}
*/

class Book {
    constructor(title,author,pages,read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
        this.id = crypto.randomUUID();
    }

    changeReadStatus() {
        if (this.read === "Read") {
            this.read = "Not Read";
            console.log(this);
            console.log('Changed Book Status');
        } else {
            this.read = "Read";
            console.log(this);
            console.log('Changed Book Status');
        }
    }
}

function addBookToLibrary(title, author, pages, read) {
    /*
    const title = form.elements["title"].value;
    const author = form.elements["author"].value;
    const pages = form.elements["pages"].value;
    */
   
    const readCheck = form.elements['read'].checked;
    
    const newBook = new Book(title, author, pages, readCheck);
    myLibrary.push(newBook);
    console.log(myLibrary);
    return newBook;
}
/*
function displayBooks() {
    let eachBook = myLibrary.forEach(item => {
        console.log(item)
    });
}
*/
function getFormValues() {
    const formData = new FormData(form);
    return Object.fromEntries(formData);
}

function completeLibrary() {
    const values = getFormValues();
    const readCheck = form.elements['read'].checked;
    return addBookToLibrary(values.title, values.author, values.pages, readCheck);
    // displayBooks();
}



submit.addEventListener('click', (e) => {
    e.preventDefault();
    // completeLibrary();
    
    const values = completeLibrary();

    const createCard = document.createElement("div");
    createCard.classList.add("card")
    createCard.dataset.id = values.id;

    const createTitle = document.createElement("div")
    createTitle.classList.add("title")
    createTitle.textContent = "Title: " + values.title;

    const createAuthor = document.createElement("div")
    createAuthor.classList.add("author")
    createAuthor.textContent = "Author: " + values.author;

    const createPages = document.createElement("div")
    createPages.classList.add("pages")
    createPages.textContent = "Pages: " + values.pages;

    const createRead = document.createElement("div")
    createRead.classList.add("read")

    if (values.read === true) {
        values.read = "Read";
    } 
    if (values.read === false) {
        values.read = "Not Read";
    }

    createRead.textContent = "Read: " + values.read;

    const createDelete = document.createElement("button")
    createDelete.textContent = "Delete Book";

    createCard.appendChild(createTitle);
    createCard.appendChild(createAuthor);
    createCard.appendChild(createPages);
    createCard.appendChild(createRead);
    createCard.appendChild(createDelete);
    
    createDelete.addEventListener('click', () => {
        console.log("Card Deleted");
        container.removeChild(createCard);

        myLibrary = myLibrary.filter(item => item.id !== values.id);
        console.log(myLibrary);
    })

    const createReadStatus = document.createElement("button")
    createReadStatus.textContent = "Change Book Status";
    
    createReadStatus.addEventListener('click', () => {
        values.changeReadStatus();
        createRead.textContent = "Read: " + values.read;
    })

    createCard.appendChild(createReadStatus);
    
    container.appendChild(createCard);

    console.log(values);

});