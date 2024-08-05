class Carro {
    constructor(nome, portas) {
        this.nome = nome
        this.portas = portas
        this.ligado = false
        this.vel = 80
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
    constructor(nome, portas, blindagem, municao) {
        super(nome, portas)
        this.blindagem = blindagem
        this.municao = municao
        this.setCor('Verde')
        this.vel = 60
    }
    atirar = function() {
        if(this.municao > 0) {
            this.municao--
        }
    }
    tiroinimigo = function() {
        if(this.blindagem > 0) {
            this.blindagem = this.blindagem - 25
        }
    }
}

class Utilitario extends Carro {

}

const c1 = new Carro('Normal', 4)
c1.ligar()
c1.setCor('Preto')

const c2 = new Militar('Militar', 2, 100, 5)
c2.ligar()
c2.tiroinimigo()
c2.tiroinimigo()
c2.atirar()

console.log(`Nome: ${c1.nome}`)
console.log(`Portas: ${c1.portas}`)
console.log(`Ligado: ${c1.ligado? 'Sim':'Não'}`)
console.log(`Velocidade: ${c1.vel}`)
console.log(`Cor: ${c1.cor}`)
console.log('----------------------------------')
console.log(`Nome: ${c2.nome}`)
console.log(`Portas: ${c2.portas}`)
console.log(`Ligado: ${c2.ligado? 'Sim':'Não'}`)
console.log(`Velocidade: ${c2.vel}`)
console.log(`Cor: ${c2.cor}`)
console.log(`Blindagem: ${c2.blindagem}`)
console.log(`Munição: ${c2.municao}`)


// TEMPO D VD 11:37