const valores = [10, 8, 9, 2, 15, 4 ,7, 0]
const itValores = valores[Symbol.iterator]()

const texto = 'Youtube'
const itTexto = texto[Symbol.iterator]()

console.log(itTexto)
console.log(itTexto.next().value)
console.log(itTexto.next().value)
console.log(itTexto.next().value)
console.log(itTexto.next().value)
console.log(itTexto.next().value)
console.log(itTexto.next().value)
console.log(itTexto.next().value)
console.log(itTexto.next().value)
console.log(itTexto.next().value)

const caixa = document.getElementById('caixa')

let cores = ['Azul', 'Verde', 'Vermlho']
let cursos = ['HTML','CSS','Javascript', cores]



cursos.map((el) => {
    const linha = document.createElement('p')
    linha.innerHTML = el
    caixa.appendChild(linha)
})