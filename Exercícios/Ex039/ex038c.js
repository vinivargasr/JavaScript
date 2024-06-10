const caixa1 = document.querySelector('#caixa1')
const cursosZ = [...document.querySelectorAll('.cursos')]
const cursos = ['HTML','CSS','Javascript','PHP','React', 'MySQL','Python']

cursos.map((el, chave) => {
    const newElement = document.createElement('div')

    newElement.setAttribute('id','c' + (chave + 1))
    newElement.setAttribute('class','curso c1')
    newElement.innerHTML = el

caixa1.appendChild(newElement)
})