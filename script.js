//Creacion de clase imagen
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

//Seleccion de nodos del HTML
const inputLink = document.querySelector(".inputLink");
const inputTitulo = document.querySelector(".inputTitulo");
const galeria = document.querySelector(".galeria")
const botonAgregarImagen = document.querySelector(".agregarImagen");

//Funcion que permite agregar una imagen a la galeria
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

//Funcion que permite eliminar una imagen a la galeria
const eliminarImagen = (elemento) =>{
    const padre = elemento.parentNode;
    const padre2 = padre.parentNode;
    padre2.classList.remove("contenedoragregado")
    padre2.classList.add("contenedorEliminado");
    setTimeout(()=>{
        padre2.remove();
    },1001);
}

//Funcion que permite visualizar los detalles de una imagen de la galeria
const desplegarDetalles = (padre) => {
    let padre2=padre.parentNode;

    let div = document.createElement("DIV");
    div.classList.add("desplegarDetalles");
    let imagenDetalle = padre2.getElementsByTagName("IMG")[0];
    imagenDetalle.classList.toggle("imagen", false);
    imagenDetalle.classList.add("imagenDetalle");
    
    div.innerHTML =`${imagenDetalle.outerHTML}
    <p><b>Link: </b>${imagenDetalle.getAttribute("src")}</p>
    <button class="boton salir" onclick="salirDetalles(this)">Salir</button>`;
    document.body.appendChild(div);
}

//Funcion que permite salir de los detalles de una imagen de la galeria
const salirDetalles = (elemento) => {
    let padre = elemento.parentNode;
    padre.setAttribute("style",'display:none');
}

//Adicion de evento al boton agregar imagen
botonAgregarImagen.addEventListener("click", ()=>{
    agregarImagen();
    inputLink.value="";
    inputTitulo.value=""
})

