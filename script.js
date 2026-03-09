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

function iterateItems(arr){
    arr.forEach(i => {
        console.log(i.title + i.author + i.pages + i.read)
    });
}

const abrir_modal = document.getElementById("abrir_modal")
const modal = document.getElementById("modal")
const cerrar_modal = document.getElementById("cerrar_modal")
const identificador = document.getElementById("identificador")
const formulario = document.querySelector(".formulario")
const nombre = ""
const autor = ""
const paginas = ""
const leido = ""
const noleido = ""
const estado = ""

abrir_modal.addEventListener("click",()=>{
    modal.showModal();
    const id = identificador.textContent = `ID: ${crypto.randomUUID()}` 
})

cerrar_modal.addEventListener("click",()=>{
    modal.close();
})

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    nombre = document.getElementById("nombre")
    autor = document.getElementById("autor")
    paginas = document.getElementById("paginas")
    leido = document.getElementById("leido")
    noleido = document.getElementById("noleido")

    if(leido.checked){
        estado = "Read"
        addBookToLibrary(nombre,autor,paginas,estado)
    }

    if(noleido.checked){
        estado = "Unread"
        addBookToLibrary(nombre,autor,paginas,estado)
    }

    if(!noleido.checked && !leido.checked){
        alert("Debe marcar el estado del libro")
    }

})

