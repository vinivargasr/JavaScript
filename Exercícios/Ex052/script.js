const pessoa = {
    nome: 'Bruno',
    canal: 'CFB Cursos',
    curso: 'Javascript',
    aulas: {
        aula01: 'Introdução',
        aula02: 'Variáveis',
        aula03: 'Condicional'
    }
}

const stringJson = JSON.stringify(pessoa)
const objectJson = JSON.parse(stringJson)

console.log(pessoa)
console.log(stringJson)
console.log(objectJson)