function soma (...valores) {
    let tam = valores.length
    let res = 0
    for(let v of valores) {
        res += v
    }

    return res
}

console.log(soma(10, 5, 2, 15, 8))

//----------------------------------------------

const f = new Function('v1', 'v2', 'return v1 + v2') // Função Construtor Anônima

console.log(f(10, 5))

//----------------------------------------------

const soma = (v1, v2) => {
    let res = v1 + v2
    return res
}
console.log(soma(10, 5))

const nome = n => n
console.log(nome('Bruno'))

const add = n => n + 10
console.log(add(10))


