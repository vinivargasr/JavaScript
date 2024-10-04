const carro = document.getElementById('carro')
const btnEsquerda = document.getElementById('btnEsquerda')
const btnDireita = document.getElementById('btnDireita')
const btnParar = document.getElementById('btnParar')
const btnCima = document.getElementById('btnCima')
const btnBaixo = document.getElementById('btnBaixo')
const carroImg = document.querySelector('img')

let anima = null
let animaVertical = null
let tamMax = null
let altMax = null

const init = () => {
    carro.style = 'position:relative; left:0px; top:0px'
    tamMax = window.innerWidth - carro.offsetWidth
    altMax = window.innerHeight - carro.offsetHeight - 15
}

const alterarDVD = (novaImagem) => {
    carroImg.src = novaImagem
}

const mover = (direcao) => {
    if (direcao > 0) {
        if (parseInt(carro.style.left) <= tamMax) {
            carro.style.left = parseInt(carro.style.left) + (2*direcao) + 'px'
            anima = setTimeout(mover, 5, direcao)
        } else {
            alterarDVD('dvdAmarelo.png')
            clearTimeout(anima)
            mover(-1)
        }
    } else {
        if (parseInt(carro.style.left) >= 0) {
            carro.style.left = parseInt(carro.style.left) + (2*direcao) + 'px'
            anima = setTimeout(mover, 5, direcao)
        } else {
            alterarDVD('dvdVerde.png')
            clearTimeout(anima)
            mover(1)
        }
    }
}

const moverVerifical = (dir) => {
    if (dir > 0) {
        if (parseInt(carro.style.top) <= altMax) {
            carro.style.top = parseInt(carro.style.top) + (2*dir) + 'px'
            animaVertical = setTimeout(moverVerifical, 5, dir)
        } else {
            alterarDVD('dvdVermelho.png')
            clearTimeout(animaVertical)
            moverVerifical(-1)
        }
    } else {
        if (parseInt(carro.style.top) >= 0) {
            carro.style.top = parseInt(carro.style.top) + (2*dir) + 'px'
            animaVertical = setTimeout(moverVerifical, 5, dir)
        } else {
            alterarDVD('dvdAzul.png')
            clearTimeout(animaVertical)
            moverVerifical(1)
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

btnCima.addEventListener('click', () => {
    clearTimeout(animaVertical)
    moverVerifical(1)
})

btnBaixo.addEventListener('click', () => {
    clearTimeout(animaVertical)
    moverVerifical(-1)
})

btnParar.addEventListener('click', () => {
    clearTimeout(anima)
    clearTimeout(animaVertical)
})

window.onload = init
window.addEventListener('resize',() => {
    tamMax = window.innerWidth - carro.offsetWidth
    altMax = window.innerHeight - carro.offsetHeight - 15
})