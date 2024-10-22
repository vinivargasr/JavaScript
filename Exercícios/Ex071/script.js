const btnCaixa = document.getElementById('btnCaixa')
const body = document.querySelector('body')

btnCaixa.addEventListener('click', () => {
    const div = document.createElement('div')
    div.setAttribute('class', 'divCaixa')
    body.appendChild(div)

    const divFilha = document.createElement('div')
    divFilha.setAttribute('class', 'divFilha')
    div.appendChild(divFilha)

    const pDiv = document.createElement('p')
    pDiv.setAttribute('class', 'pDiv')
    pDiv.innerHTML = 'Como vc tá?'
    divFilha.appendChild(pDiv)

    const btndivBem = document.createElement('button')
    btndivBem.setAttribute('class', 'btndivBem')
    btndivBem.innerHTML = 'Bem'
    divFilha.appendChild(btndivBem)

    const btndivMal = document.createElement('button')
    btndivMal.setAttribute('class', 'btndivMal')
    btndivMal.innerHTML = 'Mal'
    divFilha.appendChild(btndivMal)

    btndivBem.addEventListener('click', () => {
        div.style.display = 'none'
        alert('Quebom!')
    })

    btndivMal.addEventListener('click', () => {
        div.style.display = 'none'
        alert(':/')
    })
})