let myLibrary = [];

let Book = class {
    constructor(title, author, pages, read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    info() {
        return `Title is ${this.title}, written by ${this.author}, and have ${this.pages} number of pages`;
    }
}

// Same as above
// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
//     this.info = function(){
//         return `${title} by ${author}, ${pages} pages, ${read} yet`;
//     }
// }


    const submit = document.getElementById("new-book");

    submit.addEventListener("click", addBookToLibrary);

    
function addBookToLibrary(event){
    let title1 = document.getElementById("title").value;
    let author1 = document.getElementById("author").value;
    let pages1 = document.getElementById("pages").value;
    let read1 = document.getElementById("read").value;

    //Pushing object by form values to array

    if (title1 == ""){
        title1 = "Unknown";
    }
    if (author1 == "") {
        author1 = "Unknown";
    }
    if (pages1 == "") {
        pages1 = "Unknown";
    }
    if (read1 == "") {
        read1 = "Unknown";
    }

    myLibrary.push(new Book(title1, author1, pages1, read1));

    //Getting card container and creating DOM for object
    const cardContainer = document.getElementById("card-container");
    const card = document.createElement("div");
    card.classList.add("card" + myLibrary.length);


    const titlep = document.createElement('p');
    titlep.innerHTML = "Title: " + title1;
    const authorp = document.createElement('p');
    authorp.innerHTML = "Author: " + author1;
    const pagesp = document.createElement('p');
    pagesp.innerHTML = "Number of pages: " + pages1;
    const readp = document.createElement('p');
    readp.innerHTML = "Read Status: " + read1;
    const infop = document.createElement('p');
    infop.innerHTML = "Info: " + myLibrary[myLibrary.length - 1].info();

    //delete card
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "Delete";
    deleteButton.addEventListener("click", function(){return cardContainer.removeChild(card)});

    //changing read value button
    const changeRead = document.createElement("button");
    changeRead.innerHTML = "Change";
    changeRead.addEventListener("click", function(){
        const status = prompt("What status of read?");
        return readp.innerHTML = "Read: " + status;
    })
    
    cardContainer.appendChild(card);
    card.appendChild(titlep);
    card.appendChild(authorp);
    card.appendChild(pagesp);
    card.appendChild(readp);
    card.appendChild(infop);
    card.appendChild(deleteButton);
    card.appendChild(changeRead);

    event.preventDefault();

}
