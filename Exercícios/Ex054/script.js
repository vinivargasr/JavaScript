const numero = document.getElementById('numero')
const btnPromessa = document.getElementById('btnPromise')

numero.innerHTML = 'Esperando'

btnPromessa.addEventListener('click',(evt) => {
    numero.innerHTML = 'Processando...'
    promessa()
        .then((retorno) => {
            numero.innerHTML = retorno
            numero.classList.remove('erro')
            numero.classList.add('ok')
        })
        .catch((retorno) => {
            numero.innerHTML = retorno
            numero.classList.remove('ok')
            numero.classList.add('erro')
        })
})

const promessa = () => {
    let p = new Promise((resOk, resNaoOK) => {
        let resultado = true
        let tempo = 3000

        setTimeout(() => {
            if (resultado) {
                resOk('Deu boa')
            } else {
                resNaoOK('Deu ruim')
            }
        }, tempo)
    })
    return p
}