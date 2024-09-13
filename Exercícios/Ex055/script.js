const divData = document.getElementById('divData')
const divRelogio = document.getElementById('divRelogio')
const btnAtivar = document.getElementById('btnAtivar')
const btnParar = document.getElementById('btnParar')
const tmpAlarme = document.getElementById('tmpAlarme')
const horaAlarme = document.getElementById('horaAlarme')
const timer = document.getElementById('timer')

const somAlarme = new Audio('musicBackInBlack.mp3')
somAlarme.loop = -1

let tsAtual = null
let tsAlarme = null
let alarmeAtivado = null
let alarmeTocando = null

btnAtivar.addEventListener('click', () => {
    tsAtual = Date.now()
    tsAlarme = tsAtual + (tmpAlarme.value*1000)
    alarmeAtivado = true
    const dtAlarme = new Date(tsAlarme)
    const horas = dtAlarme.getHours() < 10 ? '0' + dtAlarme.getHours() : dtAlarme.getHours()
    const minutos = dtAlarme.getMinutes() < 10 ? '0' + dtAlarme.getMinutes() : dtAlarme.getMinutes()
    const segundos = dtAlarme.getSeconds() < 10 ? '0' + dtAlarme.getSeconds() : dtAlarme.getSeconds()
    horaAlarme.innerHTML = `Hora do Alarme: ${horas}:${minutos}:${segundos}`
    
})

btnParar.addEventListener('click', () => {
    alarmeAtivado = false
    alarmeTocando = false
    horaAlarme. innerHTML = 'Hora do Alarme:'
    tmpAlarme.value = 0
    timer.classList.remove('alarme')
    somAlarme.pause()
    somAlarme.currentTime = 0
})


const data = new Date()

let dia = data.getDate()
dia = dia < 10 ? '0' + dia : dia
let mes = data.getMonth() + 1
mes = mes < 10 ? '0' + mes : mes

const dataR = `${dia}/${mes}/${data.getFullYear()}`
divData.innerHTML = dataR

const relogio = () => {
    const data = new Date()
    let hora = data.getHours()
    hora = hora < 10 ? '0' + hora : hora
    let minuto = data.getMinutes()
    minuto = minuto < 10 ? '0' + minuto : minuto
    let segundo = data.getSeconds()
    segundo = segundo < 10 ? '0' + segundo : segundo
    
    const horaCompleta = `${hora}:${minuto}:${segundo}`
    divRelogio.innerHTML = horaCompleta
    if (alarmeAtivado && !alarmeTocando) {
        if (data.getTime() >= tsAlarme) {
            alarmeTocando = true
            somAlarme.play()
            timer.classList.add('alarme')
        }
    }
}

const intervalo = setInterval(relogio, 1000)