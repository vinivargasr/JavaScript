const Pessoa = {
    nome: "",
    idade: "",
    getNome:function(){
        return this.nome
    },
    getIdade:function(){
        return this.idade
    },
}

const btn_add = document.querySelector('#btn_add')
const resultado = document.querySelector('.res')

btn_add.addEventListener('click', ()=>{
    Pessoa.nome = document.querySelector('#f_nome').value
    Pessoa.idade = document.querySelector('#f_idade').value
    
    const divNova = document.createElement('div')
    divNova.setAttribute('class', 'pessoa')
    divNova.innerHTML = `Nome: ${Pessoa.getNome()}<br>Idade: ${Pessoa.getIdade()}`
    resultado.appendChild(divNova)
})