// script.js

function mostrarSeccion(seccion) {
    // Primero ocultamos todas las secciones
    const secciones = document.querySelectorAll('.seccion');
    secciones.forEach(seccion => {
        seccion.classList.remove('activa');
    });

    // Ahora mostramos la sección que el usuario ha seleccionado
    const seccionSeleccionada = document.getElementById(seccion);
    seccionSeleccionada.classList.add('activa');
}

// Mostramos la sección de inicio por defecto al cargar la página
window.onload = function() {
    mostrarSeccion('inicio');
};
