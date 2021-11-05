let numeroCartas;


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
        cards.innerHTML += `   <div onclick="flipCard(this)" class="card" data-identifier="card">
        <div class="front-face card-layout hidden" data-identifier="front-face">
        <img src="${pares[i]}" alt="Imagem não encontrada."></img>
        </div>
        <div class="back-face card-layout" data-identifier="back-face"></div>
        </div>`
    }
}
function flipCard(cartaClicada) {
    let cardFront = cartaClicada.querySelector(".card .front-face");
    let cardBack = cartaClicada.querySelector(".card .back-face");
    let cards = document.querySelectorAll(".cards ")

    cardFront.classList.toggle("hidden");
    cardBack.classList.toggle("hidden");
}

addCards();

function comparador() {
    return Math.random() - 0.5;
}
