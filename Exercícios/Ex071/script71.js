const btnCaixa = document.getElementById('btnCaixa')
const btnCaixa2 = document.getElementById('btnCaixa2')
const btnCaixa3 = document.getElementById('btnCaixa3')

const body = document.querySelector('body')

const mensagem = (texto) => {
    const div = document.createElement('div')
    div.setAttribute('class', 'divCaixa')
    body.appendChild(div)

    const divFilha = document.createElement('div')
    divFilha.setAttribute('class', 'divFilha')
    div.appendChild(divFilha)

    const pDiv = document.createElement('p')
    pDiv.setAttribute('class', 'pDiv')
    pDiv.innerHTML = texto
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
}

btnCaixa.addEventListener('click', () => {
    mensagem('Como vc tá?')
})

btnCaixa2.addEventListener('click', () => {
    mensagem('Tá td bem?')
})

btnCaixa3.addEventListener('click', () => {
    mensagem('Eai?')
})