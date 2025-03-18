Juego de Amigo Secreto

Este es un sencillo juego de "Amigo Secreto" desarrollado con HTML y JavaScript. Permite agregar nombres a una lista y luego realizar un sorteo para elegir un amigo al azar.

Características

Agregar nombres a una lista.

Sortear un amigo al azar de la lista.

Mensajes de validación para evitar entradas vacías.

Instrucciones de Uso

Ingresa el nombre de un amigo en el campo de texto.

Presiona el botón "Agregar Amigo" para añadirlo a la lista.

Una vez agregados los amigos, presiona "Sortear Amigo" para obtener un nombre al azar.

Código Principal

Este proyecto usa JavaScript para manejar la lista de amigos y realizar el sorteo:

let listaAmigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo");
    let nombreAmigo = amigo.value.trim();

    if (nombreAmigo === "") {
        alert("¡Por Favor, inserte un nombre!");
    } else {
        listaAmigos.push(nombreAmigo);

        const lista = document.getElementById("listaAmigos");
        const nuevoElemento = document.createElement("li")
        nuevoElemento.textContent = nombreAmigo;
        lista.appendChild(nuevoElemento);

        amigo.value = "";
    }
}

function sortearAmigo(){
    if (listaAmigos.length === 0){
        alert("No hay amigos para sortear.");
        return;
    }

    const indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    const amigoSorteado = listaAmigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
}

Tecnologías Utilizadas

HTML para la estructura de la página.

JavaScript para la lógica del juego.

Autor

Desarrollado por Diana Solis.

¡Disfruta jugando al Amigo Secreto!