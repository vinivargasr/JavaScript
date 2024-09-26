import { contatos } from "./bancoContatos.js";

let contato = {
    getTodosContatos: function() {
        return contatos
    },
    getContato: function(iCont) {
        return contatos[iCont]
    },
    addContato: function(novoContato, destinoDOM) {
        const cont = {
            nome: novoContato.value,
            telefone: novoContato.value,
            email: novoContato.value
        }
        contatos.push(cont)

        const div = document.createElement('div')
        div.setAttribute('class', 'contato')

        const pNome = document.createElement('p')
        pNome.innerHTML = novoContato.nome
        const pFone = document.createElement('p')
        pFone.innerHTML = novoContato.telefone
        const pEmail = document.createElement('p')
        pEmail.innerHTML = novoContato.email

        div.appendChild(pNome)
        div.appendChild(pFone)
        div.appendChild(pEmail)
        destinoDOM.appendChild(div)
    }

}

export default contato