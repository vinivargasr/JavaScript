const idades = [15, 21, 30, 17, 18, 44, 12, 50]
const maior = idades.filter((idade) => {
    if (idade >= 18)
        return idade
})

const menor = idades.filter((idade) => {
    if (idade < 18)
        return idade
})

console.log(idades)
console.log(maior)
console.log(menor)