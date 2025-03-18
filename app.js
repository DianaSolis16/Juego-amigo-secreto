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
    const amigoSorteado = listaAmigos [indiceAleatorio];

    document.getElementById("resultado").innerHTML = `El amigo secreto es: <strong> ${amigoSorteado}</strong>`;
}