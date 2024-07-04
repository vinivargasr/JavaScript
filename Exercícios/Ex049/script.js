class Carro {
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 0
        this.cor = undefined
    }

    ligar = function() {
        this.ligado = true
    }

    desligar = function() {
        this.ligado = false
    }
    
    setCor = function(cor) {
        this.cor = cor
    }
}

class Militar extends Carro {

}

const c1 = new Carro('Normal', 4)
c1.ligar()
c1.setCor('Preto')

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${c1.ligado? 'Sim':'Não'}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)

// TEMPO D VD 11:37