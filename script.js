const myLibrary = [];

function Book(title, author , pages, read){
    if(!new.target){
        throw Error("Usted debe utilizar el operador new para llamar al constructor")
    }
    id: crypto.randomUUID()
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(nombre,autor,pagina,estado){
    const libro = new Book(nombre,autor,pagina,estado)
    myLibrary.push(libro)
}

