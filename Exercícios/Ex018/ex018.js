function contar() {
var ini = document.getElementById('iini')
var fim = document.getElementById('ifim')
var passos = document.getElementById('ipasso')
var resultado = document.getElementById('res')

var passonumber = Number(passos.value)
var ininumber = Number(ini.value)
var fimnumber = Number(fim.value)

if (fimnumber == 0) {
    resultado.innerHTML = '*** Adicione um fim ***'
} else if (fimnumber < ininumber) {
    resultado.innerHTML = '*** Erro inicio maior que fim ***'
} else if (passonumber == 0) {
    resultado.innerHTML = '*** Adicione a quantidade de passos ***'
} else {
    resultado.innerHTML = ''
    while (ininumber <= fimnumber) {
        resultado.innerHTML += `${ininumber} 👉 `
        ininumber = ininumber + passonumber
    }

    resultado.innerHTML += '🏁'
    }
}