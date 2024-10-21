const timer = document.getElementById('timer')
const btnIniciar = document.getElementById('btnIniciar')
const btnParar = document.getElementById('btnParar')
const btnZerar = document.getElementById('btnZerar')

let intervalo = null
let tempoInicial = null

const contador = () => {
    const tempoAtual = Date.now()
    let contagem = tempoAtual - tempoInicial
    let segundos = Math.floor((tempoAtual - tempoInicial) / 1000)
    console.log(segundos)
    timer.innerHTML = converter(segundos)
}

const converter = (segundos) => {
    const hora = Math.floor(segundos / 3600)
    const resto = segundos % 3600

    const minuto = Math.floor(resto / 60)
    const segundo = Math.floor(resto % 60)

    const form = `
        ${hora < 10 ? `0${hora}`: hora}:${minuto < 10 ? `0${minuto}`: minuto}:${segundo  < 10 ? `0${segundo}`: segundo}`

    return form
}

btnIniciar.addEventListener('click', () => {
    tempoInicial = Date.now()
    intervalo = setInterval(contador, 1000)
})

btnParar.addEventListener('click', () => {
    clearInterval(intervalo)
})

btnZerar.addEventListener('click', () => {
    tempoInicial = Date.now()
    timer.innerHTML = '00:00:00'
    clearInterval(intervalo)
})
