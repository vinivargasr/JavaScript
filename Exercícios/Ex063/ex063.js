// class Jogador {
//     constructor(nome) {
//         this.nome = nome
//         this.id = Symbol()
//     }
// }

// let jogadores = [new Jogador('j1'), new Jogador('j2'), new Jogador('j3'), new Jogador('j4'),]

// let s1 = jogadores[2].id

// jogadores = jogadores.filter((j) => {
//     return j.id != s1
// })

// console.log(jogadores)

const nome = Symbol('nome')
const numero = Symbol('numero')
const cor = Symbol('cor')

const Jogador = {
    nome: 'j1',
    numero: 10,
    cor: 'amarelo'
}

for (p in Jogador) {
    console.log(p)
}

console.log(Jogador.nome)