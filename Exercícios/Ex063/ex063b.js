let nome = new String('Bruno')
let nome2 = new String('Bruno')
let canal = new String('CBF')

console.log(nome.charAt(0))
console.log(nome.charCodeAt(0))
console.log(nome.concat(canal))


console.log(nome.localeCompare(nome2)) // Se retornar 0 é igual
console.log(nome.replace('Bruno','Paulo')) // Substitui String
console.log(nome.search('Pinho'))
console.log(nome.slice(6,11))
console.log(nome.split(' '))
console.log(nome.substring(6,11))
console.log()