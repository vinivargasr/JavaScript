var numerosadc = []

function adicionar() {
    var num = document.getElementById('inum')
    var texto = document.getElementById('ifim')

    var numero = Number(num.value)

    num.value = ''
    num.focus()

    if (numerosadc.includes(numero)) {
        alert('*** NÚMERO JÁ ADICIONADO ***')
    } else if (numero == 0 || numero > 100) {
        alert('*** NÚMERO MAIOR/MENOR DO QUE O SOLICITADO ***')
    } else {
    numerosadc.push(numero)
    texto.innerHTML += `Valor ${numero} adicionado.\n`
    }
}

function finaliza() {
    var res = document.getElementById('resultado')
    
    if (numerosadc.length == 0 ) {
        alert('*** NENHUM NÚMERO ADICIONADO ***')
    } else {

    var soma = 0
    for (var i = 0; i < numerosadc.length; i++) {
        soma += numerosadc[i]
    }
    
    var media = soma / numerosadc.length

    numerosadc.sort(function(a, b) {
        return a - b
    })

    var menor = numerosadc[0]
    var maior = numerosadc[numerosadc.length - 1]

    res.innerHTML = `<p>Ao todo, temos ${numerosadc.length} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`
    res.innerHTML += `<p>Somando todos os valores temos ${soma}</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${media.toFixed(1)}</p>`
    res.innerHTML += `Os números são ${numerosadc}`
    }
}