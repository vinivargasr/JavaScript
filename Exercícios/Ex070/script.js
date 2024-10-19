const timer = document.getElementById('timer')

const tempoInicial = Date.now()

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

setInterval(contador, 1000)
