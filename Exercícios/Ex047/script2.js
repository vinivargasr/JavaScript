const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const res = document.getElementById('res')
const mais = document.getElementById('mais')
const menos = document.getElementById('menos')
const vezes = document.getElementById('vezes')
const dividir = document.getElementById('dividir')

const operacoes = [
   (num1, num2) => {
        return num1 + num2
   },
   (num1, num2) => {
        return num1 - num2
   },
   (num1, num2) => {
        return num1 * num2
   },
   (num1, num2) => {
        return num1 / num2
   }
]

mais.addEventListener('click', () => {
    var resultadoSoma = operacoes[0](parseFloat(num1.value), parseFloat(num2.value))
    res.innerHTML = resultadoSoma
})

menos.addEventListener('click', () => {
    var resultadoSub = operacoes[1](parseFloat(num1.value), parseFloat(num2.value))
    res.innerHTML = resultadoSub
})

vezes.addEventListener('click', () => {
    var resultadoVzs = operacoes[2](parseFloat(num1.value), parseFloat(num2.value))
    res.innerHTML = resultadoVzs
})

dividir.addEventListener('click', () => {
    var resultadoDiv = operacoes[3](parseFloat(num1.value), parseFloat(num2.value))
    res.innerHTML = resultadoDiv
})