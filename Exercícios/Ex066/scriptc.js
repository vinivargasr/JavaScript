const long = document.getElementById('long')
const lati = document.getElementById('lati')

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarLocalicao, erroLocalicao)
} else {
    console.log('Golocalização não suportada')
}

function mostrarLocalicao(pos) {
    console.log(pos)
    lati.innerHTML = `Latitude: ${pos.coords.latitude}`
    long.innerHTML = `Longitude: ${pos.coords.longitude}`
}

function erroLocalicao() {
    console.log('Erro ao obter a localização')
}