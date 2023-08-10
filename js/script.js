import { rasgos, caza, evolucion, ultimosDatos } from "./datos.js"


//Enlaces
let enlaces = document.querySelectorAll('a')
let tituloDocumento = document.getElementById('titulo')
let parrafoDocumento = document.getElementById('parrafo')


//Agregar un elemento click por cada enlace
enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function () {
        enlaces.forEach(function (enlace) {
            enlace.classList.remove('active') //Remover la clase active del enlace
        });

        this.classList.add('active')

        // Obtener los valores de la funcion obtener contenido
        let contenido = obtenerContenido(this.textContent)

        tituloDocumento.innerHTML = contenido.titulo
        parrafoDocumento.innerHTML = contenido.parrafo

    });


});


function obtenerContenido(enlace) {
    let contenido = {
        'Rasgos': rasgos,
        'Técnica de Caza': caza,
        'Evolución': evolucion,
        'Ultimos datos': ultimosDatos,
    }; return contenido[enlace];

}
