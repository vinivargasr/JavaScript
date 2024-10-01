let nome = new String('Vinícius Vargas Ribeiro')
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
console.log(nome.startsWith('B')) // Começa com, true ou false
console.log(nome.endsWith('Campos')) // Termina com, true ou false
console.log(nome.includes('teste')) // contém na string, true ou false
console.log(nome.repeat(3)) // Repete a string, pela quantidade definida
console.log(String.fromCodePoint(66))

// RegEx - Expressões Regulares
// g: Busca global (encontra todas as ocorrências, não só a primeira).
// i: Ignora maiúsculas e minúsculas.
// m: Busca em múltiplas linhas.
console.log(nome.search(/vargas/i))
console.log(nome.match(/v/ig))
console.log(nome.replace(/vargas/ig, 'Testando'))
console.log(nome.match(/[ri]/ig))
console.log(nome.match(/[a-z]/ig))
console.log(nome.match(/\p{L}/gu)) // pega até o acentos