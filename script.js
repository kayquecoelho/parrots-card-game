let contadorDeCartasSelecionadas = 0;
let cartasViradas = 0;
let númeroDeCartas;
let qtdJogadas = 0
let tempo = 0;
let id;

function configurações() {
    númeroDeCartas = parseInt(prompt("Com quantas cartas você deseja jogar?", "Digite um número par entre 4 e 14."));

    const endereçoDasImagens = ["/assets/explodyparrot.gif",
        "/assets/bobrossparrot.gif",
        "/assets/fiestaparrot.gif",
        "/assets/tripletsparrot.gif",
        "/assets/metalparrot.gif",
        "/assets/revertitparrot.gif",
        "/assets/unicornparrot.gif"
    ]

    while (númeroDeCartas % 2 !== 0 || númeroDeCartas < 4 || númeroDeCartas > 14 || númeroDeCartas === NaN) {
        númeroDeCartas = parseInt(prompt("Com quantas cartas você deseja jogar?"))
    }

    const númeroDeRepetições = númeroDeCartas / 2;
    const cardsHTML = []
    let elementosHTML;
    for (let i = 0; i < númeroDeRepetições; i++) {
        for (let j = 0; j < 2; j++) {
            elementosHTML = `<article class="card" data-identifier="card" onclick="recebeClique(this)">
            <div class="front-face face" data-identifier="front-face" >
            <img src="/assets/front.png" >
            </div>
            <div class="back-face face" data-identifier="back-face">
            <img src="${endereçoDasImagens[i]}" >
            </div>
            </article>
            `
            cardsHTML.push(elementosHTML)
        }
    }

    cardsHTML.sort(comparador)

    const seção = document.querySelector("section");
    for (let i = 0; i < cardsHTML.length; i++) {
        seção.innerHTML += cardsHTML[i]
    }

    id = setInterval(contarTempo, 1000)

}
function recebeClique(endereçoClique) {
    const verificação = endereçoClique.classList.contains("virado")
    if (!verificação) {
        if (contadorDeCartasSelecionadas < 2) {
            CliqueNaCarta(endereçoClique)
        }
    }
}
function CliqueNaCarta(endereçoClique) {

    const verificação = endereçoClique.classList.contains("selecionado")

    if (!verificação) {
        endereçoClique.classList.add("selecionado")
        const frontFace = endereçoClique.querySelector(" .front-face")
        const backFace = endereçoClique.querySelector(" .back-face")

        frontFace.classList.add("face-frente")
        backFace.classList.add("face-costas")

        contadorDeCartasSelecionadas++
        qtdJogadas++

    }

    if (contadorDeCartasSelecionadas === 2) {
        compararCartas()

    }
}
function compararCartas() {
    const cartasSelecionadas = document.querySelectorAll(".selecionado")

    if (cartasSelecionadas[0].innerHTML === cartasSelecionadas[1].innerHTML) {

        for (let i = 0; i < cartasSelecionadas.length; i++) {
            cartasSelecionadas[i].classList.remove("selecionado")
            cartasSelecionadas[i].classList.add("virado")
        }

        cartasViradas = cartasViradas + 2
        contadorDeCartasSelecionadas = 0

    } else {
        setTimeout(virarCartas, 1000)
    }

    setTimeout(fimDoJogo, 1000)

}

function virarCartas() {
    const cartasSelecionadas = document.querySelectorAll(".selecionado")

    for (let i = 0; i < cartasSelecionadas.length; i++) {
        const frontFace = document.querySelector(".selecionado .front-face")
        const backFace = document.querySelector(".selecionado .back-face")

        frontFace.classList.remove("face-frente")
        backFace.classList.remove("face-costas")
        cartasSelecionadas[i].classList.remove("selecionado")

    }

    contadorDeCartasSelecionadas = 0

}
function fimDoJogo() {
    if (cartasViradas === númeroDeCartas) {
        clearInterval(id)
        alert(`Você ganhou em ${qtdJogadas} jogadas e em ${tempo} segundos!  `)
        const pergunta = prompt("Você deseja jogar novamente?", "Responda com 'sim' ou 'não'")

        if (pergunta === "sim") {
            document.location.reload(true)
        } else {
            alert("Obrigado por jogar!")

        }
    }
}

function comparador() {
    return Math.random() - 0.5;
}

function contarTempo() {
    tempo++
    const contador = document.querySelector(".contador");
    contador.innerHTML = tempo
}

configurações()