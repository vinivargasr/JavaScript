function insert (num) {
    document.getElementById('boxResultado').innerHTML += num
}

function limpar () {
    let resultado = document.getElementById('boxResultado').innerHTML
    document.getElementById('boxResultado').innerHTML = resultado.substring(0, resultado.length -1)
}

function calcular() {
    let resultado = document.getElementById('boxResultado').innerHTML
    if(resultado) {
        document.getElementById('boxResultado').innerHTML = eval(resultado)
    }
}