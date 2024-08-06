class Imagen{
    static cont=0
    constructor(titulo, link){
        Imagen.cont+=1
        id=
        this.titulo=titulo;
        this.link=link;
    }
}

const imagenes = [];

const inputLink = document.querySelector(".inputLink");
const inputTitulo = document.querySelector|(".inputTitulo");
const galeria = document.querySelector(".galeria")

const agregarImagen = ()=>{
    imagenes.push(new Imagen(inputTitulo.value, inputImagen.value));
    let div = document.createElement("DIV");
    div.innerHTML= `<img class="imagen" src="${inputImagen.value}" alt="">
    <h3 class="tituloImagen imagen">${inputTitulo.value}</h3>
    <button class="boton">Eliminar</button>
    <button class="boton">Ver detalles</button>`
}