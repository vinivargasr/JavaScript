//var i = 1
//
//do { 
//    console.log(`td bem? ${i}`)
//    i++
//} while (i <= 10)

var nomes = ['Abelha','Arvore','Ameixa']
var salario = 1200

console.log(`Seu nome é ${nomes[2]}`)
console.log(`Seu salário é ${salario}`)
while (salario < 2000) {
    salario += 200
    console.log(`VOCÊ RECEBEU UM AUMENTO DE 200 R$`)
}
console.log(`Seu novo salário é de ${salario}`)