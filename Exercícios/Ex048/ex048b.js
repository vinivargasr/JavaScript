class Pessoa {
    constructor(pnome, pidade) {
        this.nome = pnome
        this.idade = pidade
    }

    getNome() {
        return this.nome
    }
    getIdade() {
        return this.idade
    }
    setNome() {
        this.nome = nome
    }
    setIdade() {
        this.idade = idade
    }

    info() {
        console.log(`Nome: ${this.nome}`)
        console.log(`Idade: ${this.idade}`)
        console.log('------------------')
    }
}

let pessoas = []

const btn_add = document.getElementById('btn_add')
const res = document.querySelector('.res')

const addPessoa = () => {
    res.innerHTML = ''
    pessoas.map((p) => {
        const div = document.createElement('div')
        div.setAttribute('class','pessoa')
        div.innerHTML = `Nome: ${p.getNome()}<br>Idade:${p.getIdade()}`
        res.appendChild(div)
    })
}

btn_add.addEventListener('click',(evt) => {
    const nome = document.getElementById('f_nome')
    const idade = document.getElementById('f_idade')
    const p = new Pessoa(nome.value, idade.value)
    pessoas.push(p)
    nome.value = ''
    idade.value = ''
    nome.focus()
    addPessoa()
})