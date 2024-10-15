const iTexto = document.getElementById('iTexto')
const pTexto = document.getElementById('pTexto')
const btnTexto = document.getElementById('btnTexto')

btnTexto.addEventListener('click', (evt) => {

})

let num = 10
const curso = 'Javascript'

localStorage.setItem('numero', num)
localStorage.setItem('curso', curso)
alert(localStorage.getItem('numero'))