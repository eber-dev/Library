const myLibrary = [];

function Book(title, author , pages, read){
    if(!new.target){
        throw Error("Usted debe utilizar el operador new para llamar al constructor")
    }
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary(nombre,autor,pagina,estado){
    const libro = new Book(nombre,autor,pagina,estado)
    myLibrary.push(libro)
}

const abrir_modal = document.getElementById("abrir_modal")
const modal = document.getElementById("modal")
const cerrar_modal = document.getElementById("cerrar_modal")
const identificador = document.getElementById("identificador")

abrir_modal.addEventListener("click",()=>{
    modal.showModal();
    const id = identificador.textContent = `ID: ${crypto.randomUUID()}` 
})

cerrar_modal.addEventListener("click",()=>{
    modal.close();
})


