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

function addCart(arr){
    const cartas = document.createElement("div")
    cartas.classList.add("editarlibro")
    const numero_libro = document.createElement("p")
    numero_libro.classList.add("editarid")
    const cartanombre = document.createElement("p")
    cartanombre.classList.add("editarnombre")
    const cartaautor = document.createElement("p")
    cartaautor.classList.add("editarautor")
    const cartapagina = document.createElement("p")
    cartapagina.classList.add("editarpagina")
    const cartaestado = document.createElement("p")
    cartaestado.classList.add("editarestado")
    numero_libro.textContent = id       
    cartanombre.textContent = arr.at(-1).title
    cartaautor.textContent = arr.at(-1).author
    cartapagina.textContent = arr.at(-1).pages
    cartaestado.textContent = arr.at(-1).read
    campo.appendChild(cartas)
    cartas.appendChild(numero_libro)
    cartas.appendChild(cartanombre)
    cartas.appendChild(cartaautor)
    cartas.appendChild(cartapagina)
    cartas.appendChild(cartaestado)
}

const abrir_modal = document.getElementById("abrir_modal")
const modal = document.getElementById("modal")
const cerrar_modal = document.getElementById("cerrar_modal")
const identificador = document.getElementById("identificador")
const formulario = document.querySelector(".formulario")
const llenar = document.querySelector(".llenar")
const campo = document.querySelector(".campo")
let id
let nombre 
let autor 
let paginas 
let leido 
let noleido 
let estado 

abrir_modal.addEventListener("click",()=>{
    modal.showModal();
    id = identificador.textContent = `ID: ${crypto.randomUUID()}`
})

cerrar_modal.addEventListener("click",()=>{
    modal.close();
})

formulario.addEventListener("submit",(e)=>{
    console.log("ejecutano")
    e.preventDefault();
    nombre = document.getElementById("nombre").value
    console.log(nombre)
    autor = document.getElementById("autor").value
    console.log(autor)
    paginas = document.getElementById("paginas").value
    console.log(paginas)
    leido = document.getElementById("leido")
    noleido = document.getElementById("noleido")


    if(!noleido.checked && !leido.checked){
        alert("You must mark the book's status")
    }else if(noleido.checked && leido.checked){
        alert("You cannot select two states at the same time")
    }else if(leido.checked){
        estado = leido.value
        console.log(estado)
        addBookToLibrary(nombre,autor,paginas,estado)
        addCart(myLibrary)
    }else if(noleido.checked){
        estado = noleido.value
        console.log(estado)
        addBookToLibrary(nombre,autor,paginas,estado)
        addCart(myLibrary)
    }
    llenar.reset();
})




