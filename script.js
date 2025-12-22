/*FUNCIÓN 1: CAMBIO DE PESTAÑAS PRINCIPALES*/
const controlNavegacion = () => {
    const botones = document.querySelectorAll(".tabs button");
    const secciones = document.querySelectorAll(".contenido");

    botones.forEach(btn => {
        btn.addEventListener("click", () => {
            const id = btn.dataset.seccion;
            secciones.forEach(s => s.classList.remove("activo"));
            document.getElementById(id).classList.add("activo");
        });
    });
};

/*FUNCIÓN 2: SELECTOR DE PROYECTOS*/
const controlProyectos = () => {
    const items = document.querySelectorAll(".panel-lista .item");
    const detalles = document.querySelectorAll(".detalle");

    items.forEach(item => {
        item.addEventListener("click", () => {
            const id = item.dataset.proyecto;
            items.forEach(i => i.classList.remove("activo"));
            detalles.forEach(d => d.classList.remove("activo"));
            item.classList.add("activo");
            document.getElementById(id).classList.add("activo");
        });
    });
};

/* INICIO: LANZAR TODO AL CARGAR*/
document.addEventListener("DOMContentLoaded", () => {
    controlNavegacion();
    controlProyectos();
});