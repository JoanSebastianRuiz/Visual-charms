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
    div.classList.add("contenedorImagen");
    div.classList.add("contenedoragregado");
    
    div.innerHTML = `<img class="imagen" id="imagen${imagen.id}" src="${inputLink.value}" alt="">
    <h3 class="tituloImagen imagen">${inputTitulo.value}</h3>
    <div>
    <button class="boton eliminarImagen" onclick="eliminarImagen(this)">Eliminar</button>
    <button class="boton" onclick="desplegarDetalles(this.parentNode)">Ver detalles</button>
    </div>`

    galeria.appendChild(div);
}

const eliminarImagen = (elemento) =>{
    const padre = elemento.parentNode;
    const padre2 = padre.parentNode;
    padre2.classList.remove("contenedoragregado")
    padre2.classList.add("contenedorEliminado");
    setTimeout(()=>{
        padre2.remove();
    },1001);
}

const desplegarDetalles = (padre) => {
    let padre2=padre.parentNode;
    console.log(padre2)
    console.log("hola")

    let div = document.createElement("DIV");
    div.classList.add("desplegarDetalles");
    let imagenDetalle = padre2.getElementsByTagName("IMG")[0];
    imagenDetalle.classList.toggle("imagen", false);
    imagenDetalle.classList.add("imagenDetalle");
    
    div.innerHTML =`${imagenDetalle.outerHTML}
    <p><b>Link: </b>${imagenDetalle.getAttribute("src")}</p>
    <button class="boton salir" onclick="salirDetalles(this)">Salir</button>`;
    padre2.appendChild(div);
}

const salirDetalles = (elemento) => {
    let padre = elemento.parentNode;
    padre.setAttribute("style",'display:none');
}

botonAgregarImagen.addEventListener("click", ()=>{
    agregarImagen();
    inputLink.value="";
    inputTitulo.value=""
})

