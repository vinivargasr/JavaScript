const caixa1 = document.querySelector('#caixa1')
const cursosZ = [...document.querySelectorAll('.cursos')]
const cursos = ['HTML','CSS','Javascript','PHP','React', 'MySQL','Python']

cursos.map((el, chave) => {
    const newElement = document.createElement('div')

    newElement.setAttribute('id','c' + (chave + 1))
    newElement.setAttribute('class','curso c1')
    newElement.innerHTML = el

    const btn_lixeira = document.createElement('img')
    btn_lixeira.setAttribute('src','lixo.png')
    btn_lixeira.setAttribute('class','btn_lixeira')
    newElement.appendChild(btn_lixeira)

    btn_lixeira.addEventListener('click', (evt) => {
        caixa1.removeChild(newElement)
    })

caixa1.appendChild(newElement)
})