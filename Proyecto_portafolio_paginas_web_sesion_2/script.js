/* CONTROL NAVEGACION PRINCIPAL */
const controlNavegacion = () => {

const botones = document.querySelectorAll(".tabs button");
const secciones = document.querySelectorAll(".contenido");

if(!botones.length) return;

botones.forEach(boton => {

boton.addEventListener("click", () => {

const id = boton.dataset.seccion;

botones.forEach(b => b.classList.remove("activo"));
secciones.forEach(s => s.classList.remove("activo"));

boton.classList.add("activo");

const seccion = document.getElementById(id);
if(seccion) seccion.classList.add("activo");

});

});

};


/* CONTROL SELECTOR DE PROYECTOS */

const controlProyectos = () => {

const items = document.querySelectorAll(".panel-lista .item");
const detalles = document.querySelectorAll(".detalle");

if(!items.length) return;

items.forEach(item => {

item.addEventListener("click", () => {

const id = item.dataset.proyecto;

items.forEach(i => i.classList.remove("activo"));
detalles.forEach(d => d.classList.remove("activo"));

item.classList.add("activo");

const detalle = document.getElementById(id);
if(detalle) detalle.classList.add("activo");

});

});

};


/* PANEL PROYECTO BASES DE DATOS */

const controlPanelProyecto = () => {

const botones = document.querySelectorAll(".btn-proyecto-1");
const contenidos = document.querySelectorAll(".panel-detalle .detalle");

if(!botones.length) return;

botones.forEach(boton => {

boton.addEventListener("click", () => {

const id = boton.dataset.contenido;

botones.forEach(b => b.classList.remove("activo"));
contenidos.forEach(c => c.classList.remove("activo"));

boton.classList.add("activo");

const panel = document.getElementById(id);
if(panel) panel.classList.add("activo");

});

});

};


/*ESTILOS DE CAJA DE PROYECTOS*/

const sliderProyecto = () => {
    const slides = document.querySelectorAll(".slide");
    const next = document.getElementById("next");
    const prev = document.getElementById("prev");

    if(!slides.length) return;

    let index = 0;

    function mostrarSlide(i){
        slides.forEach(s => s.classList.remove("activo"))
        index =(i + slides.length) % slides.length;
        slides[index].classList.add("activo");
    }
    next.addEventListener("click", () => {
        mostrarSlide(index +1);
    })
    prev.addEventListener("click", () => {
        mostrarSlide(index -1);
    })
};

    document.addEventListener("DOMContentLoaded", () => {

        controlNavegacion();
        controlProyectos();
        controlPanelProyecto();
        sliderProyecto();
        visorImagenes();
});

/*VISOR DE IMAGENES*/

const visorImagenes = () => {
    const visor = document.querySelector(".visor-imagen");
    const imagenGrande = document.querySelector(".imagen-grande");
    const cerrar=document.querySelector(".cerrar");
    const imagenes = document.querySelectorAll(".slide-imagen img");

    if(!visor) return;

    imagenes.forEach(img =>{

        img.addEventListener("click",() =>{

            visor.style.display = "flex";
            imagenGrande.src = img.src;

        });
    });

    cerrar.addEventListener("click", () => {
        visor.style.display = "none";
    });
}