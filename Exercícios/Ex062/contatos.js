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
            nome: novoContato.nome,
            telefone: novoContato.telefone,
            email: novoContato.email
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

        const remove = document.createElement('button')
        remove.innerHTML = 'x'
        remove.setAttribute('class','remove')

        const index = contatos.length - 1

        remove.addEventListener('click', () => {
            const index = contatos.findIndex(c => c.nome === novoContato.nome && c.telefone === novoContato.telefone && c.email === novoContato.email)
    
            if (index > -1) {
                contatos.splice(index, 1)
                div.remove()
                console.log(this.getTodosContatos())
            }
        })

        div.appendChild(pNome)
        div.appendChild(pFone)
        div.appendChild(pEmail)
        div.appendChild(remove)
        destinoDOM.appendChild(div)
    }

}

export default contato