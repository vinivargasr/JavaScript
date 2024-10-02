const carro = document.getElementById('carro')
const btnEsquerda = document.getElementById('btnEsquerda')
const btnDireita = document.getElementById('btnDireita')
const btnParar = document.getElementById('btnParar')

let posiçãoCarro = 0
let cliquesRealizados = 0

btnDireita.addEventListener('click', () => {
    if (cliquesRealizados < 1) {
        cliquesRealizados ++
        posiçãoCarro += 1200
        carro.style.marginLeft = `${posiçãoCarro}px`
    }
})

btnEsquerda.addEventListener('click', () => {
    if (cliquesRealizados > 0) {
        cliquesRealizados --
        posiçãoCarro += -1200
        carro.style.marginLeft = `${posiçãoCarro}px`
    }
})

btnParar.addEventListener('click', () => {
    carro.style.marginLeft = `${posiçãoCarro}px`
})