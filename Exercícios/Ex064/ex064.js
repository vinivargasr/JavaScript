const carro = document.getElementById('carro')
const btnEsquerda = document.getElementById('btnEsquerda')
const btnDireita = document.getElementById('btnDireita')
const btnParar = document.getElementById('btnParar')

let anima = null
let tamMax = null

const init = () => {
    carro.style = 'position:relative; left:0px'
    tamMax = window.innerWidth - 166
}

const mover = (direcao) => {
    if (direcao > 0) {
        if (parseInt(carro.style.left) <= tamMax) {
            carro.style.left = parseInt(carro.style.left) + (10*direcao) + 'px'
            anima = setTimeout(mover, 5, direcao)
        } else {
            clearTimeout(anima)
            mover(-1)
        }
    } else {
        if (parseInt(carro.style.left) >= 0) {
            carro.style.left = parseInt(carro.style.left) + (10*direcao) + 'px'
            anima = setTimeout(mover, 5, direcao)
        } else {
            clearTimeout(anima)
            mover(1)
        }
    }
}

btnDireita.addEventListener('click', () => {
    clearTimeout(anima)
    mover(1)
})

btnEsquerda.addEventListener('click', () => {
    clearTimeout(anima)
    mover(-1)
})

btnParar.addEventListener('click', () => {
    clearTimeout(anima)
})

window.onload = init
window.addEventListener('resize',() => {
    tamMax = window.innerWidth - 166
})