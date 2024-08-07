class Imagen{
    static cont=0
    constructor(titulo, link){
        Imagen.cont+=1
        this.id=Imagen.cont;
        this.titulo=titulo;
        this.link=link;
    }
}

const imagenes = [];

const inputLink = document.querySelector(".inputLink");
const inputTitulo = document.querySelector(".inputTitulo");
const galeria = document.querySelector(".galeria")
const botonAgregarImagen = document.querySelector(".agregarImagen");
const botonEliminarImagen = document.querySelector(".eliminarImagen")

const agregarImagen = ()=>{
    let imagen =new Imagen(inputTitulo.value, inputLink.value);
    imagenes.push(imagen);

    let div = document.createElement("DIV");
    
    div.innerHTML = `<img class="imagen" id="imagen${imagen.id}" src="${inputLink.value}" alt="">
    <h3 class="tituloImagen imagen">${inputTitulo.value}</h3>
    <button class="boton eliminarImagen" onclick="eliminarImagen(this)">Eliminar</button>
    <button class="boton" onclick="desplegarDetalles(imagen${imagen.id})">Ver detalles</button>`

    galeria.appendChild(div);
    localStorage.setItem("imagenes", JSON.stringify(imagenes));
}

const eliminarImagen = (elemento) =>{
    const padre = elemento.parentNode;
    padre.remove();

}

const desplegarDetalles = (imagen) => {
    const padre = imagen.parentNode;
    let div = document.createElement("DIV");
    div.innerHTML =`<p><b>Link: </b>${imagen.getAttribute("src")}</p>`;
    padre.appendChild(div);
}

botonAgregarImagen.addEventListener("click", ()=>{
    agregarImagen();
})

