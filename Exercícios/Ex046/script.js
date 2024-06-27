const umArray = document.getElementById('array')
const btnReduzir = document.getElementById('btnReduzir')
const resultado = document.getElementById('resultado')

//                    UTILIZANDO EVERY

// const elementosArray = [21, 25, 19, 20, 15, 18, 22]
// umArray.innerHTML = `[${elementosArray}]`

// btnVerificar.addEventListener('click',(evt) => {
//     const retorno = elementosArray.every((el, index) => {
//         if ( el <= 18) {
//             resultado.innerHTML = `Array não conforme na posição ${index + 1}`
//         }
//         return el >= 18
//     })
//     if (retorno) {
//         resultado.innerHTML = 'OK'
//     }
//     console.log(retorno)
// })

//                      UTILIZANDO SOME
// 
// const elementosArray = [16, 12, 10, 18, 15, 13, 11]
// umArray.innerHTML = `[${elementosArray}]`

// btnVerificar.addEventListener('click',(evt) => {
//     const retorno = elementosArray.some((el, index) => {
//         if ( el <= 18) {
//             resultado.innerHTML = `Array não conforme na posição ${index + 1}`
//         }
//         return el >= 18
//     })
//     if (retorno) {
//         resultado.innerHTML = 'OK'
//     }
// })

const elementosArray = [1,2,3,4,5]
let ant = []
let atu = []

umArray.innerHTML = `[${elementosArray}]`

btnReduzir.addEventListener('click', (evt) => {
    resultado.innerHTML = elementosArray.reduce((anterior, atual, posicao) => {
        ant.push(anterior)
        atu.push(atual)
        return atual + anterior
    })
    resultado.innerHTML += `<br>${ant} <br> ${atu}`
})