function conta() {
var ini = document.getElementById('iini')
var fim = document.getElementById('ifim')
var passos = document.getElementById('ipasso')
var resultado = document.getElementById('res')

var passonumber = Number(passos.value)
var ininumber = Number(ini.value)
var fimnumber = Number(fim.value)


if (ininumber <= fimnumber) {
    ininumber += passonumber
    resultado.innerHTML = 'ininumber'
}
    
}

function contar() {
    var resultado = document.getElementById('res')

    resultado.innerHTML = 'Oi'
}