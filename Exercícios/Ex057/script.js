const palco = document.getElementById('palco')
const numObjetos = document.getElementById('numObjetos')
const txtQuantidade = document.getElementById('txtQuantidade')
const btnAdd = document.getElementById('btnAdd')
const btnRemover = document.getElementById('btnRemover')

let larguraPalco = palco.offsetWidth
let alturaPalco = palco.offsetHeight
let bolas = []
let numBola = 0

class Bola {
    constructor(arrayBolas, palco) {
        this.tamanho = Math.floor(Math.random()*10) + 10
        this.r =  Math.floor(Math.random()*255)
        this.g =  Math.floor(Math.random()*255)
        this.b =  Math.floor(Math.random()*255)
        this.posicaoX = Math.floor(Math.random()* larguraPalco - this.tamanho)
        this.posicaoY = Math.floor(Math.random()* alturaPalco - this.tamanho)
        this.velx = Math.floor(Math.random()*2) + 0.5
        this.vely = Math.floor(Math.random()*2) + 0.5
        this.direcaoX = (Math.random()*10) > 5 ? 1: -1
        this.direcaoY = (Math.random()*10) > 5 ? 1: - 1
        this.palco = palco
        this.arrayBolas = arrayBolas
        this.id = Date.now() + '_' + Math.floor(Math.random()*100000000000)
        this.desenhar()
        this.controle = setInterval(this.controlar, 10)
        this.eu = document.getElementById(this.id)
        numBola++
        numObjetos.innerHTML = numBola
    }

    minhaPosicao = () => {
        return this.arrayBolas.indexOf(this)
    }

    remover = () => {
        clearInterval(this.controle)
        bolas = bolas.filter((b) => {
            if (b.id != this.id) {
                return b
            }
        })
        this.eu.remove()
        numBola--
        numObjetos.innerHTML = numBola
    }

    desenhar = () => {
        const div = document.createElement('div')
        div.setAttribute('id', this.id)
        div.setAttribute('class', 'bola')
        div.setAttribute('style',`left:${this.posicaoX}; top:${this.posicaoY}; width:${this.tamanho}; height:${this.tamanho}; background-color:rgb(${this.r},${this.g},${this.b})`)
        this.palco.appendChild(div)
    }

    controleBordas = () => {

    }

    controlar = () => {
        controleBordas()
        this.posicaoX += this.direcaoX * this.velx
        this.posicaoY += this.direcaoY * this.vely
        this.eu.setAttribute('style',`left:${this.posicaoX}; top:${this.posicaoY}; width:${this.tamanho}; height:${this.tamanho}; background-color:rgb(${this.r},${this.g},${this.b})`)
        if ((this.posicaoX > larguraPalco) || (this.posicaoY > alturaPalco)) {
            this.remover()
        }
    }
}

window.addEventListener('resize',(evt) => {
    let larguraPalco = palco.offsetWidth
    let alturaPalco = palco.offsetHeight
})

btnAdd.addEventListener('click',(evt) => {
    const qtde = txtQuantidade.value
    for(let i = 0; i < qtde; i++) {
        // const bola = new Bola()
        // bolas.push(bola)
        // palco.appendChild(bola)
        // bola = undefined
    }
})

btnRemover.addEventListener('click',(evt) => {
    bolas.length = 0
})