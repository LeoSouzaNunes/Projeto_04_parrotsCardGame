let numeroCartas;
let contador = 0;


function addCards() {
    while (!(numeroCartas <= 14 && numeroCartas >= 4 && numeroCartas % 2 === 0)) {
        numeroCartas = parseInt(prompt("Insira um número de 4 até 14 cartas para jogar."));
    }

    let cartas = document.querySelector(".cards");

    while (contador < numeroCartas) {
        cartas.innerHTML = cartas.innerHTML + `   <div class="card" data-identifier="card">
    <div class="front" data-identifier="front-face"></div>
    <div class="back" data-identifier="back-face"></div>
    </div>`
        contador = contador + 1;
    }
}

addCards();
