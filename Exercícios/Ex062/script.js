import c from "./contatos.js"

const listaContatos = document.getElementById('listaContatos')
const btnGravar = document.getElementById('btnGravar')

btnGravar.addEventListener('click',(evt) => {
    const cont = {
        nome: document.getElementById('inome').value,
        telefone: document.getElementById('itel').value,
        email: document.getElementById('imail').value
    }
    c.addContato(cont, listaContatos)
    console.log(c.getTodosContatos())
})