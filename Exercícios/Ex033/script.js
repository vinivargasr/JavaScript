function relogio() {
    const agora = new Date()
    const horas = String(agora.getHours()).padStart(2, '0')
    const minutos = String(agora.getMinutes()).padStart(2, '0')
    const segundos = String(agora.getSeconds()).padStart(2, '0')
    const horario = `${horas}:${minutos}:${segundos}`
    document.getElementById('relogio').innerHTML = horario
}

relogio()
setInterval(relogio, 1000)