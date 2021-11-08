let cartasViradas = [], cartasClicadas = [];
let numeroDeJogadas = 0, i = 0, tempo = 0, numeroCartas;
let cronometro = setInterval(contadorTimer, 1000);

function addCards() {

    while (!(numeroCartas <= 14 && numeroCartas >= 4 && numeroCartas % 2 === 0)) {
        numeroCartas = parseInt(prompt("Insira um número de 4 até 14 cartas para jogar."));
    }

    let images = [
        'images/1.gif',
        'images/2.gif',
        'images/3.gif',
        'images/4.gif',
        'images/5.gif',
        'images/6.gif',
        'images/7.gif',
    ]

    images.sort(comparador)

    let pares = [];

    for (let i = 0; i < (numeroCartas / 2); i++) {
        pares.push(images[i], images[i]);
    }

    pares.sort(comparador)

    let cards = document.querySelector(".cards");

    for (let i = 0; i < numeroCartas; i++) {
        cards.innerHTML += `<div onclick="flipCard(this)" class="card" data-identifier="card">
        <div class="front-face card-layout" data-identifier="front-face">
        <img src="${pares[i]}" alt="Imagem não encontrada."></img>
        </div>
        <div class="back-face card-layout" data-identifier="back-face"></div>
        </div>`
    }
}

function flipCard(cartaClicada) {
    numeroDeJogadas++;
    i++;
    cartaClicada.classList.add("picked");
    cartasClicadas.push(cartaClicada);

    if (i === 2) {
        if (cartasClicadas[i - 2].innerHTML === cartasClicadas[i - 1].innerHTML) {
            cartasClicadas[i - 2].removeAttribute("onclick");
            cartasClicadas[i - 1].removeAttribute("onclick");
            i = 0;
            cartasClicadas = [];
        } else {
            setTimeout(removerCartas, 1000);
        }
    }

    fimDeJogo();
}

function removerCartas() {
    cartasClicadas[i - 2].classList.remove("picked");
    cartasClicadas[i - 1].classList.remove("picked");

    cartasClicadas = [];
    i = 0;
}

function fimDeJogo() {

    cartasViradas = document.querySelectorAll(".picked");

    if (cartasViradas.length === numeroCartas) {
        alert(`Você ganhou em ${numeroDeJogadas} jogadas e em ${tempo - 1} segundos`)
        let playAgain = prompt("Gostaria de jogar novamente?");
        if (playAgain === "sim" || "Sim") {
            location.reload(true);
        }
    }

}

function contadorTimer() {
    let textoTempo = document.querySelector(".timer")

    textoTempo.innerHTML = tempo++;
}


if (cartasViradas === numeroCartas) {
    clearInterval(cronometro)
}
function comparador() {
    return Math.random() - 0.5;
}
addCards();