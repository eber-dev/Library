const myLibrary = [];

function Book(title, author , pages, read){
    if(!new.target){
        throw Error("Usted debe utilizar el operador new para llamar al constructor")
    }
    this.id = crypto.randomUUID().slice(0,8)
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

Book.prototype.alternar = function(id){
    myLibrary.forEach((elemento)=>{
        if(elemento.id == id){
            switch(elemento.read){
                case "Read":
                    elemento.read = "Unread"
                    break;
                case "Unread":
                    elemento.read = "Read"
                    break;
            }
        }
    })
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
    const contenedor_botones = document.createElement("div")
    contenedor_botones.classList.add("botones_card")
    const eliminar = document.createElement("button")
    eliminar.classList.add("delete")
    cartas.dataset.id = arr.at(-1).id
    const cambiar = document.createElement("button")
    cambiar.classList.add("change")
    numero_libro.textContent = "ID: "+arr.at(-1).id       
    cartanombre.textContent = arr.at(-1).title
    cartaautor.textContent = arr.at(-1).author
    cartapagina.textContent = arr.at(-1).pages + " pages"
    cartaestado.textContent = arr.at(-1).read
    eliminar.textContent = "Eliminar"
    cambiar.textContent = estado
    campo.appendChild(cartas)
    cartas.appendChild(numero_libro)
    cartas.appendChild(cartanombre)
    cartas.appendChild(cartaautor)
    cartas.appendChild(cartapagina)
    cartas.appendChild(cartaestado)
    cartas.appendChild(contenedor_botones)
    contenedor_botones.appendChild(eliminar)
    contenedor_botones.appendChild(cambiar)

    console.log(myLibrary)

    eliminar.addEventListener("click",()=>{
        cartas.remove()
        myLibrary.forEach((elemento,indice)=>{
            if(elemento.id == cartas.dataset.id){
                myLibrary.splice(indice,1)
            }
        })
        console.log(myLibrary)
    })

    cambiar.addEventListener("click", ()=>{
        myLibrary.forEach((elemento)=>{
            if(elemento.id == cartas.dataset.id){
                elemento.alternar(cartas.dataset.id)
                cambiar.textContent = elemento.read
                cartaestado.textContent = elemento.read
            }
        })
    })
}

const abrir_modal = document.getElementById("abrir_modal")
const modal = document.getElementById("modal")
const cerrar_modal = document.getElementById("cerrar_modal")
const formulario = document.querySelector(".formulario")
const llenar = document.querySelector(".llenar")
const campo = document.querySelector(".campo")
let nombre 
let autor 
let paginas 
let leido 
let noleido 
let estado 

abrir_modal.addEventListener("click",()=>{
    modal.showModal();
})

cerrar_modal.addEventListener("click",()=>{
    modal.close();
})

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    nombre = document.getElementById("nombre").value
    autor = document.getElementById("autor").value
    paginas = document.getElementById("paginas").value
    leido = document.getElementById("leido")
    noleido = document.getElementById("noleido")


    if(!noleido.checked && !leido.checked){
        alert("You must mark the book's status")
    }else if(noleido.checked && leido.checked){
        alert("You cannot select two states at the same time")
    }else if(leido.checked){
        estado = leido.value
        addBookToLibrary(nombre,autor,paginas,estado)
        addCart(myLibrary)
    }else if(noleido.checked){
        estado = noleido.value
        addBookToLibrary(nombre,autor,paginas,estado)
        addCart(myLibrary)
    }
    llenar.reset();
    modal.close()
})





