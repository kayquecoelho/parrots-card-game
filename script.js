let contadorDeCartasViradas = 0;
let cartasViradas = [];
let filhosDasCartasViradas = []
let paresVirados = 0;
function configurações() {
    let númeroDeCartas = parseInt(prompt("Com quantas cartas você deseja jogar?"));

    const endereçosDasCartas = ["/assets/explodyparrot.gif",
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
            elementosHTML = `<article class="card" data-identifier="card">
            <div class="front-face face" data-identifier="back-face" onclick="CliqueNaCarta(this)">
            <img src="/assets/front.png" >
            </div>
            <div class="back-face face" data-identifier="front-face">
            <img src="${endereçosDasCartas[i]}" >
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

}

function CliqueNaCarta(endereçoClique) {
    const card = endereçoClique.parentNode
    const filhos = card.children

    if (contadorDeCartasViradas < 2) {
        cartasViradas.push(card)
        filhosDasCartasViradas.push(filhos)
        contadorDeCartasViradas++
        for (let i = 0; i < filhos.length; i++) {
            let filho = filhos[i];
            let verificar = filhos[i].classList.contains("front-face")

            if (verificar) {
                filhos[i].classList.add("leite")
            } else {
                filhos[i].classList.add("docinho")
            }
        }
    }

    console.log(contadorDeCartasViradas)
    console.log(cartasViradas)
    console.log(filhosDasCartasViradas)
    console.log("oi")
    compararCartas()
}
function compararCartas() {
    const carta1 = cartasViradas[0]
    const carta2 = cartasViradas[1]

    if (carta1.innerHTML === carta2.innerHTML) {
        console.log("As cartas são iguais!")
        paresVirados++
    } else {
        for (let j = 0; j < filhosDasCartasViradas; j++) {
            for (let i = 0; i < filhos.length; i++) {
                let filho = filhos[i];
                let verificar = filhos[i].classList.contains("front-face")

                if (verificar) {
                    filhos[i].classList.add("leite")
                } else {
                    filhos[i].classList.add("docinho")
                }
            }
        }

    }
}




function comparador() {
    return Math.random() - 0.5;
}
configurações()