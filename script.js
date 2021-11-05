function configurações() {
    let númeroDeCartas = parseInt(prompt("Com quantas cartas você deseja jogar?"));

    const endereços = ["/assets/explodyparrot.gif",
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

    const númeroDeRepetições = númeroDeCartas/2;
    const cardsHTML = []
    let elementosHTML;
    for (let i = 0; i < númeroDeRepetições; i++) {
        for (let j = 0; j < 2; j++){
            elementosHTML = `<article class="card">
            <div class="front-face face">
            <img src="/assets/front.png" >
            </div>
            <div class="back-face face">
            <img src="${endereços[i]}" >
            </div>
            </article>
            `
            cardsHTML.push(elementosHTML)
        }
    }
    
    cardsHTML.sort(comparador)
    
    const seção = document.querySelector("section");
    for (let i = 0; i < cardsHTML.length;i++ ){
        seção.innerHTML += cardsHTML[i]
    }
    
    


}
configurações()
function comparador() { 
	return Math.random() - 0.5; 
}