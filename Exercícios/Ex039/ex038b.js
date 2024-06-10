const caixa1 = document.querySelector('#caixa1')
const cursos = [...document.querySelectorAll('.curso')]



console.log(cursos[0].getRootNode())
console.log(caixa1.firstElementChild)
console.log(caixa1.lastElementChild)
console.log(caixa1.children)


if (caixa1.hasChildNodes) {
    console.log('Possui filhos')
} else {
    console.log('Não possui filhos')
}

console.log(caixa1.hasChildNodes ? 'Possui filhos' : 'Não possui filhos')

console.log(caixa1.children[1].innerHTML = 'Teste')

