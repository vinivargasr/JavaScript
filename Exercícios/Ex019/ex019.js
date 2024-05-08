var num = [5, 8, 2, 9, 3]

/*
console.log(num)
console.log(`O vetor tem ${num.length} posições`)
console.log(`O primeiro valor do vetor é ${num[0]}`)

for (var i = 0; i < num.length ; i++){
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}

console.log('---------------')

for (var i in num) {
    console.log(`A posição ${i} tem o valor ${num[i]}`)
}
*/

var posicao = num.indexOf(8)
if (posicao == -1) {
    console.log('O valor não foi encontrado')
} else {
    console.log(`O valor 8 está na posição ${posicao}`)
}
