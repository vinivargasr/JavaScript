const cursos = ['HTML', 'CSS','Javascript', 'PHP', 'React']

let c = cursos.map((el, i) => {
    console.log(`Curso: ${el} - Posição do curso: ${i}`)
})

// -----------------------------]


const conveterInt = (e) => parseInt(e)
const dobrar = (e) => e*2
let num = ['1','2','3','4','5'].map(dobrar)
console.log(num)

// -----------------------------]

const numbers = [1, 4, 9, 16];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 8, 18, 32]


// -----------------------------]

const usuarios = [
    { primeiroNome: 'John', ultimoNome: 'Doe'},
    { primeiroNome: 'Jane', ultimoNome: 'Doe'},
    { primeiroNome: 'Sara', ultimoNome: 'Smith'},
    { primeiroNome: 'Michael', ultimoNome: 'Jackson'},
]

const nomeInteiro = usuarios.map(usuario => `${usuario.primeiroNome} ${usuario.ultimoNome}`)

console.log(nomeInteiro)